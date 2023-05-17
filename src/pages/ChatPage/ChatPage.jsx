import { ChatMessage } from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ChatPage.module.css";
import { useNavigate } from "react-router-dom";
import { FallingSymbols } from "../../components/FallingSymbols/FallingSymbols";

export const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [isUnderstood, setIsUnderstood] = useState(false);
  const [showSymbols, setShowSymbols] = useState(true);
  const navigate = useNavigate();

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://happy-birthday-semen.onrender.com/api"
      );

      const OS = response.data.model[1];
      setShowSymbols(false);
      const messageOne = `${getCurrentTime()} / host: Your computer ${OS} with IP-Adress: "${
        response.data.ip
      }" was successfully hacked :)`;
      const messageTwo = `${getCurrentTime()} / host: All your data has been stolen and will be transferred to the Security Service of Ukraine.`;
      const messageThree = `${getCurrentTime()} / host: Happy Birthday, ${localStorage.getItem(
        "name"
      )}! And enjoy your little birthday card!`;
      let timeoutThree;
      const timeoutOne = setTimeout(() => {
        setMessages((messages) => [...messages, messageOne]);
      }, 1000);
      const timeoutTwo = setTimeout(() => {
        setMessages((messages) => [...messages, messageTwo]);
      }, 3000);
      if (localStorage.getItem("name") === "Semen!") {
        timeoutThree = setTimeout(() => {
          setMessages((messages) => [...messages, messageThree]);
        }, 5000);
      }
      const timeoutFour = setTimeout(() => {
        setIsUnderstood(true);
      }, 6000);
      return () => {
        clearTimeout(timeoutOne);
        clearTimeout(timeoutTwo);
        clearTimeout(timeoutThree);
        clearTimeout(timeoutFour);
      };
    }
    fetchData();
  }, []);
  const handleUnderstood = () => {
    navigate("/video_morpheus");
  };

  return (
    <div className={styles.chat_Page}>
      {showSymbols ? (
        <FallingSymbols />
      ) : (
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))
      )}
      {isUnderstood && !showSymbols ? (
        <button className={styles.button} onClick={handleUnderstood}>
          Understood
        </button>
      ) : null}
    </div>
  );
};

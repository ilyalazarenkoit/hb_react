import styles from "./Pills.module.css";
import redPill from "../../images/красная прост.png";
import bluePill from "../../images/синяя прост.png";
import { useNavigate } from "react-router-dom";
export const Pills = () => {
  console.log(localStorage.getItem("name"));
  const navigate = useNavigate();
  const handleRedPill = (event) => {
    navigate("/main_video");
  };
  const handleBluePill = (event) => {
    localStorage.removeItem("name");
    window.location.assign("https://www.google.com");
  };
  return (
    <div className={styles.pills_wrapper}>
      <button onClick={handleRedPill} className={styles.pills_link}>
        <img className={styles.pills_image} src={redPill} alt="red pill" />
      </button>
      <button onClick={handleBluePill} className={styles.pills_link}>
        <img className={styles.pills_image} src={bluePill} alt="blue pill" />
      </button>
    </div>
  );
};

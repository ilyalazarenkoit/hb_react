import { InputName } from "../../components/InputName/InputName";
import { FallingSymbols } from "../../components/FallingSymbols/FallingSymbols";
import { useState, useEffect } from "react";
import styles from "./EntryPage.module.css";
import { useNavigate } from "react-router-dom";
export const EntryPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [showSymbols, setShowSymbols] = useState(true);
  const navigate = useNavigate();
  const handleNameSubmit = (name) => {
    localStorage.setItem("name", name);
    navigate("/chat");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInput(true);
      setShowSymbols(false);
    }, 13000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className={styles.entryPage}>
      {!showInput && showSymbols ? (
        <FallingSymbols />
      ) : (
        <InputName onNameSubmit={handleNameSubmit} />
      )}
    </div>
  );
};

import styles from "./InputName.module.css";

import { useState } from "react";
export const InputName = ({ onNameSubmit }) => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length !== 0) {
      onNameSubmit(name);
    }
  };
  return (
    <div className={`${styles.center} ${styles.form}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.text}>ENTER YOUR NAME: </label>
        <input
          type="text"
          className={styles.input}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" className={styles.buttonSubmit}>
          ENTER
        </button>
      </form>
    </div>
  );
};

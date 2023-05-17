import styles from "./Chat.module.css";

export const ChatMessage = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

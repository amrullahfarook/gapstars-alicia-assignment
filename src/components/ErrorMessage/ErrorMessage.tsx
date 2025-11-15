import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>⚠️</div>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

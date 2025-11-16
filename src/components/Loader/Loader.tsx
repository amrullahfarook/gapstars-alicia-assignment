import React from "react";
import { Spinner } from "@chakra-ui/react";
import styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Spinner borderWidth="4px" animationDuration="0.8s" size="xl" />
    </div>
  );
};

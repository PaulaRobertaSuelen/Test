import React from "react";
import styles from "./styles.module.css";

export default function SubTitle({ children }) {
  return <div className={styles.subTitle}>{children}</div>;
}

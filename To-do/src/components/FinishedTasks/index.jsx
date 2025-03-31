import React from "react";
import styles from "./styles.module.css";
export default function FinishedCard({ counter }) {
  return (
    <div className={styles.finishedCard}>
      <h2>Finished tasks quantity</h2>
      <h1>{counter}</h1>
    </div>
  );
}
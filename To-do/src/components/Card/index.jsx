import React from "react";
import styles from "./styles.module.css";

export default function Card({ onClickToRemove, data }) {
  return (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <p>{data.description ?? "Não informado"}</p>
      <div onClick={onClickToRemove} className={styles.remove}>
        X
      </div>
    </div>
  );
}
import React from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";

export default function NewTaskForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const description = event.target[1].value;
    const createdAt = new Date().toLocaleString();
    onSubmit({ title, description, createdAt });
  }
  return (
    <form className={styles.newTaskForm} onSubmit={handleSubmit}>
      <h2>Add new to do</h2>
      <Input placeholder="Task name" />
      <Input placeholder="Task description" />
      <Button type="submit">Create Todo</Button>
    </form>
  );
}
import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">📝 Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

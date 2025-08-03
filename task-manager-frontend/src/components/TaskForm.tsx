import { useState } from "react";
import { useAddTaskMutation } from "../features/tasks/taskApi";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [addTask] = useAddTaskMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;
    await addTask({ title });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="task-input"
      />

      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TaskForm;

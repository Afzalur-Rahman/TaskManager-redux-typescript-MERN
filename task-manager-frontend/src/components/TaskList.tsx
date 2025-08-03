import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useToggleTaskMutation,
} from "../features/tasks/taskApi";

const TaskList = () => {
  const { data: tasks, isLoading } = useGetTasksQuery();

  const [deleteTask] = useDeleteTaskMutation();

  const [toggleTask] = useToggleTaskMutation();

  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <ul className="task-list">
      {tasks?.map((task) => (
        <li key={task._id} className="task-item">
          <div
            className={`task-content ${task.completed ? "completed" : ""}`}
            onClick={() => toggleTask(task._id)}
          >
            {task.title}
          </div>
          <button
            onClick={() => deleteTask(task._id)}
            className="delete-button"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

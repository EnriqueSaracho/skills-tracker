import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [showNewTask, setShowNewTask] = useState(false);

  const addClicked = () => {
    setShowNewTask(true);
  };

  const cancelClicked = () => {
    setShowNewTask(false);
  };

  return (
    <div className="container">
      <h2>To-Do</h2>
      {showNewTask && (
        <div>
          <textarea placeholder="Task..."></textarea>
          <button>Add</button>
          <button onClick={cancelClicked}>Cancel</button>
        </div>
      )}
      <button onClick={addClicked}>+</button>
      <ul>
        <li>
          Task 1<button>Add</button>
          <button>Done</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

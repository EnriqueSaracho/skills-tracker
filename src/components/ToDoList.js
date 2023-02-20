export default function ToDoList() {
  return (
    <div className="container">
      <h2>To-Do</h2>
      <div className="newTask">
        <textarea placeholder="Task..."></textarea>
        <button>Add</button>
        <button>Cancel</button>
      </div>
      <button>+</button>
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

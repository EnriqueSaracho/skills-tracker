import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [showNewTask, setShowNewTask] = useState(false); // Shows or not the add-to-list form
  const [text, setText] = useState(""); // Text inside the form textarea
  const [itemsList, setItemsList] = useState([]); // Array of list items

  // Shows the form
  const addClicked = () => {
    setShowNewTask(true);
  };

  // Hides the form
  const cancelClicked = () => {
    setShowNewTask(false);
  };

  // Adds item to itemsList
  const addToList = () => {
    setItemsList([...itemsList, text]);
    setText("");
    setShowNewTask(false);
  };

  // Delets item from itemsList
  const deleteItem = (index) => {
    setItemsList(itemsList.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>To-Do</h2>
      {showNewTask && (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task..."
          ></textarea>
          <button onClick={addToList}>Add</button>
          <button onClick={cancelClicked}>Cancel</button>
          <p>Skills:</p>
          <label>
            <input type="checkbox" />
            HTML
          </label>
          <label>
            <input type="checkbox" />
            CSS
          </label>
          <label>
            <input type="checkbox" />
            JavaScript
          </label>
          <label>
            <input type="checkbox" />
            React.js
          </label>
          <label>
            <input type="checkbox" />
            Unity
          </label>
        </div>
      )}
      {!showNewTask && <button onClick={addClicked}>+</button>}
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item} <button>Add</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

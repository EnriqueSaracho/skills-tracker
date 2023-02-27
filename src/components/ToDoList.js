import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);

  const addClicked = () => {
    setShowNewTask(true);
  };

  const cancelClicked = () => {
    setShowNewTask(false);
  };

  const addToList = () => {
    setListItems([...listItems, text]);
    setText("");
    setShowNewTask(false);
  };

  const deleteItem = (index) => {
    setListItems(listItems.filter((item, i) => i !== index));
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
        </div>
      )}
      <button onClick={addClicked}>+</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item} <button>Add</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

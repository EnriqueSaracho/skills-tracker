import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [showNewTask, setShowNewTask] = useState(false); // Shows or not the add-to-list form
  const [text, setText] = useState(""); // Text inside the form textarea
  const [itemsList, setItemsList] = useState([]); // Array of list items
  const [htmlChecked, setHtmlChecked] = useState(false); // Form checkbox states
  const [cssChecked, setCssChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);
  const [reactChecked, setReactChecked] = useState(false);
  const [unityChecked, setUnityChecked] = useState(false);

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
    const newTask = {
      task: text,
      skills: {
        html: htmlChecked,
        css: cssChecked,
        js: jsChecked,
        react: reactChecked,
        unity: unityChecked,
      },
    };
    setItemsList([...itemsList, newTask]);
    setText("");
    setShowNewTask(false);
    setHtmlChecked(false);
    setCssChecked(false);
    setJsChecked(false);
    setReactChecked(false);
    setUnityChecked(false);
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
            <input
              type="checkbox"
              checked={htmlChecked}
              onChange={(e) => setHtmlChecked(e.target.checked)}
            />
            HTML
          </label>
          <label>
            <input
              type="checkbox"
              checked={cssChecked}
              onChange={(e) => setCssChecked(e.target.checked)}
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              checked={jsChecked}
              onChange={(e) => setJsChecked(e.target.checked)}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              checked={reactChecked}
              onChange={(e) => setReactChecked(e.target.checked)}
            />
            React.js
          </label>
          <label>
            <input
              type="checkbox"
              checked={unityChecked}
              onChange={(e) => setUnityChecked(e.target.checked)}
            />
            Unity
          </label>
        </div>
      )}
      {!showNewTask && <button onClick={addClicked}>+</button>}
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item.task} <button>Add</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

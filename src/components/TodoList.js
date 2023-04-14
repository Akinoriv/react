import React, { useState } from "react";
import "../css/TodoList.css";

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAddItem = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="todo">
      <h2 className="todo-header">todo list</h2>
      <div className="todo-form">
        <div className="todo-input-box">
          <input
            className="todo-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label className={"todo-label" + (text ? " filled" : " blank")}>
            my plans
          </label>
        </div>
        <button className="todo-btn" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li className="todo-list__item" key={index}>
            {item}
            <button
              className="todo-btn"
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

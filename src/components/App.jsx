import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const val = event.target.value;
    setNewItem(val);
  }

  function addItems() {
    setListItems(function (prevValue) {
      return [...prevValue, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newItem} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map(function (item) {
            return <ToDoItem newItem={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

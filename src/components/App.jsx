import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItems(newItem) {
    setListItems(function (prevValue) {
      return [...prevValue, newItem];
    });
  }

  function deleteItem(id) {
    setListItems((prevItems) => {
      return prevItems.filter(function (item, index) {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea btnClick={addItems} />
      <div>
        <ul>
          {listItems.map(function (item, index) {
            return (
              <ToDoItem
                newItem={item}
                id={index}
                key={index}
                onCheck={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;

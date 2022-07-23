import React, { useState } from "react";

function ToDoItem(props) {
  const [isComplete, setIsComplete] = useState(false);

  function handleClick() {
    setIsComplete(function (prevValue) {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: isComplete ? "line-through" : null }}
      >
        {props.newItem}
      </li>
    </div>
  );
}
export default ToDoItem;

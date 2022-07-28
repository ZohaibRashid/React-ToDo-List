import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={function () {
        return props.onCheck(props.id);
      }}
    >
      <li>{props.newItem}</li>
    </div>
  );
}
export default ToDoItem;

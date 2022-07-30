import React, { useState } from "react";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setNewItem(value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={newItem} />
      <button
        onClick={function () {
          props.btnClick(newItem);
          setNewItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

import React, { useState } from "react";

function App() {
  const [Input, setInput] = useState("");
  const [Items, setItems] = useState([]);

  function handle(event) {
    const newinput = event.target.value;
    setInput(newinput);
  }

  function clicked() {
    setItems((preValue) => {
      return [...preValue, Input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handle} value={Input} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;

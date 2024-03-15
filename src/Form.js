import React, {useRef, useState } from "react";

const Form = () => {
  const myRef = useRef();

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
      myrefFunction();
    }
  };
  

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  function myrefFunction() {
    myRef.current.focus();
    myRef.current.value = "";
  }
  function handleDel(index) {
    setTodos(todos.filter((item, id) => id !== index));
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="add todo"
          onChange={handleChange}
          autoFocus
          ref={myRef}
        />
        <button className="btn">add</button>
        <div className="">
          {todos.map((item, index) => (
            <div className="container" key={index}>
              <p>{item}</p>
              <button onClick={() => handleDel(index)}>delete</button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;

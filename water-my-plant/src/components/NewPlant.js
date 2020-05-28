import React, { useState } from "react";
// import styled from "styled-components";

//This file will *create* a new plant 
import Weekdays from "./Weekdays.js";
import Interval from "./Interval";

const NewPlant = props => {
  const [input, setInput] = useState({
    name: "",
    type: "",
    location: "",
    id: null
  });

  const inputHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.add({ ...input, id: Math.random() });
    setInput({ name: "", type: "", location: "", id: null });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h1>Add Plant/Watering Schedule</h1>

        <div className="input-container">
          {/* Name of plant input */}
          <div>
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              value={input.name}
              onChange={inputHandler}
              name="name"
            />
          </div>

          {/* Type of plant input */}
          <div>
            <label htmlFor="Type">Type: </label>
            <input
              type="text"
              value={input.type}
              onChange={inputHandler}
              name="type"
            />
          </div>

          {/* Location of plant */}
          <div>
            <label htmlFor="Location">Location: </label>
            <input
              type="text"
              value={input.location}
              onChange={inputHandler}
              name="location"
            />
          </div>
        </div>
      </form>
      <Weekdays />
      <Interval />
      <div>
        <button>Cancel</button>
        <button>Add</button>
      </div>
    </div>
  );
};

export default NewPlant;
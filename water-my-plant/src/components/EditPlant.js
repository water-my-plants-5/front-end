import React, { useState } from "react";
// import DeletePlant from "./DeletePlant";
// import styled from 'styled-components'


const EditPlant = props => {
  const { name, type, location, id } = props.plant;
  const [input, setInput] = useState({ name: name, type: type, location: location, id: id });
  const [editing, setEditing] = useState(false);

  const handleEdit = e => {
    setEditing(!editing);
};

const inputHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("EDITING IN PROGRESS...");
};

const handleUpdate = e => {
    e.preventDefault();
    props.update(input);
    setEditing(false);
    console.log(`CARD ${props.plant.id} UPDATED SUCESSFULLY`);
};

return editing ? (
  <div>
      <form onSubmit={handleUpdate} className="new-plant">
          <h1>Edit Plant</h1>
          <div>
              <div>
              <label htmlFor="Name">
                  Name:{" "}
                  </label>
                  <input type="text" value={input.name} onChange={inputHandler} name="name" />
              </div>

              <div>
              <label htmlFor="Type">
                  Type:{" "}
                  </label>
                  <input type="text" value={input.type} onChange={inputHandler} name="type" />
              </div>

              <div>
              <label htmlFor="Location">
                  Location:{" "}</label>
                  <input type="text" value={input.location} onChange={inputHandler} name="location" />
              </div>

          </div>
          <button>Update</button>
      </form>
      </div>
) : (
      <div className="new-plant">
          {/* <h3>Name</h3>
          <p>{ name }</p>
          <h3>Type</h3>
          <p>{ type }</p>
          <h3>Location</h3>
          <p>{ location }</p> */}
          <button onClick={handleEdit}>Edit</button>
      </div>
);
};

export default EditPlant;
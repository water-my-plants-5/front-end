import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import plant from "./plant.png";

const Signup = function () {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    phone: "",
  });

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("You must enter a username")
      .min(5, "Username must be at least 5 characters long"),
    password: Yup.string()
      .required("You must enter a password")
      .min(8, "Password must be at least 8 characters long"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Phone number must contain at least 10 characters"),
  });

  const validate = (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    Yup.reach(formSchema, event.target.name).validate(value);
  };

  const inputHandler = (event) => {
    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.errors[0]));
  };

  return (
    <div className="Signup">
      <img src={plant} alt="plant" />
      <h1>WATER MY PLANTS</h1>
      <br></br>
      <h3>Please choose a username, a password and enter a phone number</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:<br></br>
          <br></br>
          <input
            type="text"
            name="username"
            id="username"
            value={formState.username}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <br></br>
        <label htmlFor="password">
          Password:<br></br>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <br></br>
        <label htmlFor="phone">
          Phone Number:<br></br>
          <br></br>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formState.phone}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <br></br>
        <button className="submit" type="submit">
          Sign Up
        </button>
        <Link to="/login">
          <p>Continue to Login</p>
        </Link>
      </form>
    </div>
  );
};
export default Signup;

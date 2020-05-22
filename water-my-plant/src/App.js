import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";

// import { }

function App() {

  return (
    <div className="App">
    <Route exact path="/" component={Signup} />
    <Route exact path="/login" component={Login}/>
    </div>

  );
}

export default App;

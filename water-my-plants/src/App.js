import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Signup} />
    <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from "./components/Login";
import Signup from "./components/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import { useToken } from "./hooks/useToken";
import PlantList from "./components/PlantList";
import Plant from "./components/Plant";



function App() {
  const[,,setToken] = useToken("token");

  return (
    <div className="App">
    <Route exact path="/login {...props}" setToken={setToken} />
    <Route exact path="/" component={Signup} />
    <PrivateRoute exact path="/plantList" component={PlantList} />
    </div>

  );
}

export default App;

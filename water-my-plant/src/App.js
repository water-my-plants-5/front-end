import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from "./components/Login";
import Signup from "./components/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import { useToken } from "./hooks/useToken";
import PlantList from "./components/PlantList";


function App() {
  const[,,setToken] = useToken("token");

  return (
    <div className="App">
    <Route exact path="/login {...props}" setToken={setToken} />
    <Route exact path="/" component={Signup} />
    {/* <PrivateRoute  /> */}
    </div>

  );
}

export default App;

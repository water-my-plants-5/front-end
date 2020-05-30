import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import PlantList from "./components/PlantList";

import { PrivateRoute } from "./components/PrivateRoute";

import { BrowserRouter as Router } from "react-router-dom";


// import  useToken  from "./hooks/useToken";
import Plant from "./components/Plant";

function App() {
  // const [, , setToken] = useToken("token");
  return (
    <Router>
    <div className="App" >
      {/* <Route
        exact
        path="/Login"
        render={props => <Login {...props} setToken={setToken} />}
      /> */}
      <Route path="/"  component={Signup} />

      <Route exact path="/login"   component={Login} />

      <PrivateRoute exact path="/plantlist" component={PlantList} />

    </div>
    </Router>

  );
}
export default App;
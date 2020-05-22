import{
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

import Axios from "axios";

//Register Action

export const postSignup = creds => dispatch => {
  console.log("postSignup creds", creds);
  dispatch({ type: SIGNUP_START });
  return (
    Axios.post("", creds)
      .then(res => {
        console.log("RES postSignup", res);
        dispatch({ type: SIGNUP_SUCCESS });
      })
      // .catch(err => console.log(err.response.data));
      .catch(err => dispatch({ type: SIGNUP_FAILURE, payload: err }))
  );
};

//Login action

export const postLogin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    Axios.post("", creds)
      .then(res => {
        console.log("RES postLogin", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: LOGIN_SUCCESS });
      })
      // .catch(err => console.log(err));
      .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }))
  );
};
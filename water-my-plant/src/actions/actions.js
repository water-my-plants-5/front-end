import{
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS,
  FAILURE_PLANT_FAILURE,
  ADD_PLANT_START,
  ADD_PLANT_SUCCESS,
  ADD_PLANT_FAILURE,
  UPDATE_PLANT_START,
  UPDATE_PLANT_SUCCESS,
  UPDATE_PLANT_FAILURE,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAILURE
} from "../actions/types";

import Axios from "axios";

//Signup Action

export const postSignup = creds => dispatch => {
  console.log("postSignup creds", creds);
  dispatch({ type: SIGNUP_START });
  return (
    Axios.post("https://water-my-plants-5.netlify.app//", creds)
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
    Axios.post("https://water-my-plants-5.netlify.app//", creds)
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


//Plant actions

export const getPlants = userId => dispatch => {
  dispatch({ type: FETCH_PLANT_START });


  return Axios.get(`https://water-my-plants-5.netlify.app//${userId}`, {
    headers: { Authorization: localStorage.getItem("token") }
  })
    .then(res => {
      console.log("RES getPlants", res);
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const postPlants = addPlants => dispatch => {
  console.log("Test");
  dispatch({ type: ADD_PLANT_START });
  const userId = localStorage.getItem("id");
  console.log("AddPlants", addPlants);
  console.log("UserId", userId);

  return Axios.post(
    `https://water-my-plants-5.netlify.app//${userId}/plants/add`,
    addPlants,

    {
      headers: { Authorization: localStorage.getItem("token") }
    }
  )
    .then(res => {
      console.log("RES postPlants", res);
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data });
    })
    .catch(
      err => console.log(err)
      //   dispatch({ type: ADD_PLANT_FAILURE, payload: err.data.error })
    );
};

export const putPlants = (editPlants, plantId) => dispatch => {
  dispatch({ type: UPDATE_PLANT_START });
  const userId = localStorage.getItem("id");

  return Axios.put(
    `https://water-my-plants-5.netlify.app//${userId}/my_plant/${plantId}/update`,
    editPlants,
    {
      headers: { Authorization: localStorage.getItem("token") }
    }
  )
    .then(res => {
      console.log("RES putPlants", res);
      dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const deletePlants = plantId => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  const userId = localStorage.getItem("id");

  return Axios.delete(
    `https://water-my-plants-5.netlify.app//${userId}/my_plant/${plantId}/remove`,
   
    {
      headers: { Authorization: localStorage.getItem("token") }
    }
  )
    .then(res => {
      console.log("RES deletePlants", res);
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: plantId });
    })
    .catch(err => console.log(err));
};
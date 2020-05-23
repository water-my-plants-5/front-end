import{
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/types";

const initalState ={
  plantData: [],
  loggingIn: false,
  isFetching: false,
  error: null,
  token: localStorage.getItem("token")

};


export const reducer = ( state = initialState, {type, payload}) =>{
  switch(type){
    case LOGIN_SUCCESS:
      return{
        ...state,
        logggingIn:false,
        error: false,
        token: localStorage.getItem("token")
      }
    case LOGIN_FAILURE:
      return{
        ...state,
        logingIn:false,
        error: payload
      }

    

  }
}
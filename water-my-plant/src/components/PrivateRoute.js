import React from 'react';
import { Router, Redirect } from 'react-router-dom';

export const PriviteRouter = ({component: Component, ...rest}) =>{
  return(
    <Router
    { ...rest}
    render={props=>{
      if (localStorage.getItem('token')){
        return<Component{...props}/>; 
      }
       return <Redirect to="login"/>
  }}
  />
  )
};
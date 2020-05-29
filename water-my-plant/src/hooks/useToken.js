import { useState, useEffect } from "react";
import Axios from "axios";

export const useToken = param => {
  const [state, setState] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `https://water-my-plants-5.netlify.app//${localStorage.getItem(
      "id"
    )}`;
    if (token) {
      Axios.get(url, { headers: { Authorization: `${token}` } })
        .then(res => {
          // console.log("RES useToken.js", res);
          setState(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [param]);

  const setValue = value => {
    localStorage.setItem(param, value);
  };

  return [state, setState, setValue];
};
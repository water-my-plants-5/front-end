// import { useState, useEffect } from "react";
// import Axios from "axios";

// export const useToken = param => {
//   const [statee, setStatee] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     // const url ='https://water-my-plants365.herokuapp.com/'
//     const url = `https://water-my-plants365.herokuapp.com/${localStorage.getItem(
//       "id"
//     )}`;
//     if (token) {
//       Axios.get(url, { headers: { Authorization: `${token}` } })
//         .then(res => {
//           // console.log("RES useToken.js", res);
//           setStatee(res.data);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   }, [param]);

//   const setValue = value => {
//     localStorage.setItem(param, value);
//   };

//   return [statee, setStatee, setValue];
// };





import axios from 'axios';


   const useToken = () => { 
  const token = localStorage.getItem('token');
  return axios.create({  
    baseURL: 'https://water-my-plants365.herokuapp.com',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`   }
  })
}
    export default useToken;


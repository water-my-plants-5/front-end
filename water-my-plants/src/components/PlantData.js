import React, { useState, useEffect } from "react";
import axios from "axios";

const PlantData = function () {
  const [plant, setPlant] = useState({
      message: ""
  });

  useEffect(() => {
    axios
      .get(
        `https://water-my-plants365.herokuapp.com/`
      )
      .then((response) => {
        //console.log(response)
       
        setPlant(response.data);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  
  return (
    <div className="PlantData">
      <p>{plant.message}</p>
    </div>
  );
};
export default PlantData;

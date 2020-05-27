import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import {
  getPlants,
  postPlants,
  putPlants,
  deletePlants
} from "../actions/actions";
import NewPlant from "./NewPlant";
import EditPlant from "./EditPlant";
import DeletePlant from "./DeletePlant";
import Plant from "./Plant";


const PlantList = props => {
  console.log("props in Plantlist", props);
  // GET CALL
  useEffect(() => {
    props.getPlants(localStorage.getItem("id"));
  }, []);

  const testPut = { name: "putTest", type: "putTest", location: "putTest" };

  const [plants, setPlants] = useState([]);

  const submitPlant = plant => setPlants([...plants, plant]);

  const update = updatePlantInfo =>
    setPlants([
      ...plants.map(plant => {
        if (plant.id === updatePlantInfo.id) {
          console.log("CARD UPDATING....");
          return updatePlantInfo;
        }
        return plant;
      })
    ]);

    return (
      <div className="App">
        <Nav />
        <NewPlant add={submitPlant} />
  
     
        {props.plantData.map(plant => (
            <Plant
              name={plant.name}
              type={plant.type}
              location={plant.location}
              key={props.id}
            />
            <div>
              <EditPlant plant={plant} key={props.id} update={update} />
              <DeletePlant
                plant={plant}
                key={props.id}
              />
            </div>
  </div>
    );
  };

  const mapStateToProps = ({ plantData, isFetching, error }) => ({
    //   console.log("mapStateToProps Plantlist", state);
    plantData,
    isFetching,
    error
  });
  
  export default connect(
    mapStateToProps,
    { getPlants, postPlants, putPlants, deletePlants }
  )(PlantList);


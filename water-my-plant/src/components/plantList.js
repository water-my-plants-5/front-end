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
import Nav from "./nav";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const StyledCardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCardDiv = styled.div`
    // border: 1px solid red;
`


const PlantList = props => {
  console.log("props in Plantlist", props);
  // GET CALL
  useEffect(() => {
    props.getPlants(localStorage.getItem("id"));
  }, [props]); 


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
    <StyledContainer>
      <NewPlant add={submitPlant} />

  
      <StyledCardsDiv>
      {props.plantData.map(plant => (
        <StyledCardDiv>
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
        </StyledCardDiv>  
      ))}</StyledCardsDiv>
      </StyledContainer>
    </div>
  );
};

const mapStateToProps = ({ plantData, isFetching, error }) => ({
  plantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { getPlants, postPlants, putPlants, deletePlants }
)(PlantList);
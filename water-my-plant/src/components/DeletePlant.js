import React, { useState } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import {
  getPlants,
  postPlants,
  putPlants,
  deletePlants
} from "../actions/actions";

const DeletePlant = props => {

}


const mapStateToProps = ({ plantData, isFetching, error }) => ({
  //   console.log("mapStateToProps Plantlist", state);
  plantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { getPlants, postPlants, putPlants, deletePlants }
)(DeletePlant);


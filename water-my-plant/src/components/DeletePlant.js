import React, { useState } from "react";
// import styled from 'styled-components'
import { connect } from "react-redux";
import {
  getPlants,
  postPlants,
  putPlants,
  deletePlants
} from "../actions/actions";

const DeletePlant = props => {
  console.log("Delete props", props);
  const [deleting, setDelete] = useState(false);

  const handleDelete = e => {
    e.preventDefault();
    props.deletePlants(props.plant.id);
    setDelete(true);
    console.log("DELETEING: ", props.plant.id, deleting);
  };

  return deleting ? (
    <div className="hidden">
      <h1>Hidden</h1>
    </div>
  ) : (
    <div>
      <form onSubmit={handleDelete}>
        <button>Delete</button>
      </form>
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
)(DeletePlant);
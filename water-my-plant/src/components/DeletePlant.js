import React, { useState } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import {
  getPlants,
  postPlants,
  putPlants,
  deletePlants
} from "../actions/actions";

const Addbtn = styled.button`
color: white;
background: #78c885;
border: none;
font-size: 13px;
border-radius: 3px;
outline: none;
padding: 10px 30px 10px 30px;
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
cursor: pointer;
`


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
        <Addbtn>Delete</Addbtn>
      </form>
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
)(DeletePlant);
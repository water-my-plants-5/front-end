import React from "react";
import styled from 'styled-components'

const StyledPlantdiv = styled.div`
    background-color: white;
    margin: 10px;
    margin-top: 10%;
    width: 300px;
    height: 300px;
    border-radius: 2%;
`
const StyledInnerPlantDiv = styled.div`
    background-color: #e7e7e7;
    width: 95%;
    margin: 0 auto;
    border-radius: 2px;
    height: 230px;
`
const StyledPlantName = styled.h1`
    font-size: 1.3rem;
    text-align: left;
    padding-left: 6%;
    color: #198974;
`
const StyledTypeh2 = styled.h2`
    font-size: 1rem;
    text-align: left;
    padding-top: 1%;
    padding-left: 1%;
    font-size: 14px;
    color: #7ea897;
    width: 24%;
`
const StyledP = styled.p`
    text-align: left;
    font-size: .9rem;
    padding-left: 1%;
`
const StyledCheckBox = styled.input`
    display: flex;
    justify-content: flex-start;
`
const StyledNotifiactionDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: #FCFFD9;
    height: 12%;
    width: 90%;
    margin-left: 5%;
`
const StyledinfoDiv = styled.div`
    display: flex;
    // border: 1px solid red;
    height: 12%;
`
const StyledWaterDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 12%;
`
const StyledNameDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`


const Plant = props => {
    console.log("Plant", props);

  return (
    <StyledPlantdiv>
      <hr />
      <StyledNameDiv>
      <StyledPlantName>{props.name}</StyledPlantName>
      <span>...</span>
      </StyledNameDiv>
      <StyledInnerPlantDiv>
        <StyledinfoDiv>
      <StyledTypeh2>Type: </StyledTypeh2>
        <StyledP>{props.type}</StyledP> 
        </StyledinfoDiv>
        <StyledinfoDiv>
      <StyledTypeh2>Location: </StyledTypeh2>
      <StyledP>{props.location}</StyledP>
      </StyledinfoDiv>

      <StyledP>Notification:</StyledP> 
      <StyledNotifiactionDiv>
      <StyledCheckBox type='checkbox'></StyledCheckBox>
      <StyledP>Water on {/*props.date*/}</StyledP>
      </StyledNotifiactionDiv>
      <StyledP>Latest Activity</StyledP> 
      <StyledWaterDiv>
      <StyledP>Watered on {/*props.date*/}</StyledP>
      </StyledWaterDiv>
      </StyledInnerPlantDiv>
    </StyledPlantdiv>
  );
};

export default Plant;
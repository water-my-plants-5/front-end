import React, { useState } from "react";
import Toggle from "./toggle";

import styled from "styled-components";

export default function Interval() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);

  const StyledH4 = styled.h4`
    color: teal;
    font-size: 20px;
  `;

  const StyledIntervalContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
  `;
  const StyledInterval = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `;

  const StyledLabel = styled.label`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    margin-left: 20px
  `;

  const StyledBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const StyledInput = styled.input`
    width: 8rem;
    padding: 0 0 2px 0;
    margin-left: 5px;
    margin-bottom: 5px;
    outline: none;
  `;

  const StyledToggle = styled.div`
  margin-left: 55px;
  `;

  function submitHandler(event) {
    event.preventDefault();
    console.log("sign in", count);
    setCount(count);
  }

  const handleIncrement = () =>
    setTimeout(() => setCount(currentCount => currentCount + 1), 1000);

  const handleDecrement = () =>
    setTimeout(() => setCount(currentCount => currentCount - 1), 1000);

  const Button = ({ handleClick, children}) => (
    <button className='intervalbtn' type="button" onClick={handleClick}>
      {children}
    </button>
  );

  return (
    <StyledIntervalContainer>
      <StyledInterval>
        <StyledH4 className="interval-h4">Interval</StyledH4>
        <StyledDiv>
          <StyledBtn>
            <p className='count-interval'>Every {count} days</p>
            <Button  handleClick={handleIncrement}>+</Button>
            <Button  handleClick={handleDecrement}>-</Button>
          </StyledBtn>
          <form onSubmit={submitHandler}>
            <StyledLabel>
              Start Date
              <StyledInput type="date" value={count.date} placeholder="" />
            </StyledLabel>
          </form>
        </StyledDiv>
      </StyledInterval>
      <StyledToggle>
      <Toggle
        isOn={value}
        handleToggle={() => setValue(!value)}
        toggleid="wat"
      />
      </StyledToggle>
    </StyledIntervalContainer>
  );
}
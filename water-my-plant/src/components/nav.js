import React, { useState } from "react";
import styled from "styled-components";
import logo from "./photos/logo.png";

const StyledHolder = styled.div`
  display: flex;
  background: #e0f0e3;
  padding-bottom: 3px;
  padding-top: 3px;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Raleway";
  font-weight: bolder;
  color: #78c885;
  width: 89rem;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
`;


const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledButton = styled.button`
  background: #78c885;
  color: white;
  font-family: "Raleway";
  font-size: 15px;
  padding: 8px 10px 8px 10px;
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
`;


const StyledEditBtnContainer = styled.div`
background: #138D75;
padding-top: 10px;
padding-bottom: 10px;
`;

// const EditAccount = styled.button`
// border: none;
// color: white;
// background: #138D75;
// cursor: pointer;
// font-size: 12px;
// outline: none;
// `;

const Nav = props => {
  const [navsSearch, setNavsSearch] = useState({
    search: ""
  });

  const [name, setName] = useState('Brian_Ochoa')
  const [number, setNumber ] = useState('+1 (917) 332-6449')

  function submitHandler(event) {
    event.preventDefault();
    console.log("navs", setNavsSearch);
    props.navs(setNavsSearch);
  }

  function changeHandler(event) {
    console.log(navsSearch);
    setNavsSearch({ ...navsSearch, [event.target.name]: event.target.value });
  }


  return (
    <StyledHolder>
      <StyledLeft>
        <StyledLogo src={logo}  alt='logo'/>
        <h1>Water My Plants</h1>
      </StyledLeft>
      <StyledRight>
        <form onSubmit={submitHandler}>
          <label>
            <StyledInput
              type="search"
              name="search"
              results="0"
              value={navsSearch.search}
              placeholder="Search plant"
              onChange={changeHandler}
            />
          </label>
        </form>
        <StyledButton>Plants</StyledButton>
          <div>
            <h3>{name}</h3>
            <p>{number}</p>
          </div>
          <StyledEditBtnContainer>
            {/* <Popup trigger={<EditAccount>EDIT ACCOUNT DETAILS</EditAccount>} position='left'> */}
         </StyledEditBtnContainer>
      </StyledRight>
    </StyledHolder>
  );
};

export default Nav;
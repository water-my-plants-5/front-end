import React from "react";
import styled from 'styled-components';
import logo from './photos/logo.png';


const StyledLogo = styled.img`
width: 30px;
height: 30px;
`;

const H3 = styled.h3`
font-size: 2.3rem;
font-weight: bolder;
color: #000;
// margin:
`

const Header=()=>{
  return(
    <div>
    <StyledLogo src ={logo} />
    <H3>Water my Plants</H3>
    </div>
  )
}

export default Header;
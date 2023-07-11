import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';

const Container=styled.div`
    background-color:blueviolet;
    min-height: 100%;
    position: sticky;
    top:0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    
`
const Home=styled.div`
    flex:1;
    /* position: absolute;
    left:2em;
    top:2em; */
    padding-top:0.8em;
    padding-left:1.5em;
    ${mobile({padding:"1em 0 0 0.5em"})};
    cursor: pointer;
    color: white;
    /* border: 1px solid black; */
    /* display: flex;
    align-items: baseline;
    border: 1px solid black; */
`
const Title=styled.div`
    flex:25;
    font-size:45px;
    ${mobile({fontSize:"2em"})};
    font-weight:bold;
    color:whitesmoke;
    width: 100%;
    height: 8vh;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`
const Gap=styled.div`flex:1;`
const Navbar = () => {
    const navigate=useNavigate();
  return (
    <Container>
        {/* add home button */}
        <Home onClick={()=>navigate("/")}>
            <HomeIcon sx={{fontSize:30}}/>
        </Home>
      <Title> Tic-Tac-Toe</Title>
      <Gap></Gap>
    </Container>
  )
}

export default Navbar

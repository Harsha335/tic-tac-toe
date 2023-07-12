import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { styled } from 'styled-components'
import Footer from './components/Footer'
import Card from './components/Card'
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Game from './components/Game'
import poster from './images/poster.png'
import { useNavigate } from 'react-router-dom'
import rulesPic from './images/rules.jpg'
import hvsh from './images/hvsh.jpg'
import aiVSh from './images/aiVSh.jpg'
import {mobile} from './responsive'

const Container=styled.div`
    border: 0;
    margin: 0;
    padding: 0;
    background-color:inherit;
    color:whitesmoke;
    ${mobile({fontSize:"1em"})};
    
`
const Main=styled.div`
    display:flex;
    flex-direction: row;
`
const Content=styled.div`
    width:100%;
    flex:1;
    /* height: 80%; */
    /* background-color: #0f1111; */   
`
const Poster=styled.div`
    flex:1;
    ${mobile({display:"none"})};
    /* background-color: aliceblue; */
`
const Text=styled.div`
    font-size: 2em;
    margin: 20px;
    ${mobile({fontSize:"1.5em"})};
`
const Options=styled.div`
    margin:20px;
    display: flex;
    flex-direction: row;
    ${mobile({flexDirection:"column"})};
`
const Home = () => {
    const navigate=useNavigate();
    const {name1,setName1}=useState("");
    const {name2,setName2}=useState("Computer");

  return (
    <Container>
      <Navbar/>
      <Main>
        <Content>
            <Text>
                Dont know how to play 🤔
                {/* <EmojiObjectsIcon/> */}
            </Text>
            <Options>

                <span onClick={()=>navigate("/rules")}><Card image={rulesPic} text="Rules"/></span>
            </Options>
            <Text>
                Lets PLAY!!!
            </Text>
            <Options>
                <div  onClick={()=>{navigate("/input/Computer-vs-Human")}}>
                    <Card image={aiVSh} text="AI vs Human"/>
                </div>
                <div onClick={()=>navigate("/input/Human-vs-Human")}>
                    <Card image={hvsh} text="Human vs Human"/>
                </div>
            </Options>
        </Content>
        <Poster>
            <img src={poster} width={"100%"}></img>
        </Poster>
      </Main>
      <Footer/>
    </Container>
  )
}

export default Home

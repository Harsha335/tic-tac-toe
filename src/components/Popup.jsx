import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import inputBG from '../images/bg1.jpg'
import { mobile } from '../responsive';
import bg2 from '../images/bg9.jpg'

const View=styled.div`
    /* height: 100%;
    width: 100%; */
    display: flex;
    flex-direction: column;
`
const Container=styled.div`
    /* flex-flow: column; */
    background-image: url(${inputBG});
    ${mobile({backgroundImage: `url(${bg2})`})};
    background-size:100%;
    /* background-clip:content-box; */
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    /* flex: 1; */
    
    color:whitesmoke;
`
const Content=styled.div`
    width:400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    /* object-fit: cover; */
    /* opacity: 0.5; */
    filter: blur(96);
    position: relative;
    border-radius: 20px;
    margin:10px;
`
const Close=styled.div`
    position: absolute;
    right:8px;
    top:8px;
    cursor: pointer;
    /* background-color: aliceblue;
    border-radius: 20px; */
    color:whitesmoke;
`
const Context=styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top:10%;
    left:12%;
`
const Input=styled.div`
    /* position: absolute; */
    margin: 10px;
    & label{
        display: block;
        margin:10px;
        font-size: 1.2em;
        margin-left: -15px;
    }
    & input{
        width:250px;
        height:20px;
    }
`
const Bottom=styled.div`
    height: 20%;
    position: absolute;
    bottom: 15px;
    right: 25px;
    & input{
        padding:10px;
        background-color: blueviolet;
        border-radius: 20px;
        cursor: pointer;
        color: inherit;
    }
`
const Popup = () => {
    const navigate=useNavigate();
    const {type}=useParams();
    const [disabled,setDisabled]=useState(false);
    const [player1Value,setPlayer1Value]=useState('user 1');
    const [player2Value,setPlayer2Value]=useState('user 2');
    useEffect(()=>{
        if(type=='Computer-vs-Human')
        {
            setPlayer2Value("Computer");
            setDisabled('true');
        }
    },[]);
    function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    let path=`/${type}`;
    const handleClick=()=>{
        path+=`/?player1=${capitalize(player1Value)}&player2=${capitalize(player2Value)}`;
        navigate(path);
    }
  return (
    <View>
        <Navbar/>
        <Container>
        <Content>
                <Close onClick={()=>navigate("/")}><CloseIcon/></Close>
                <form>
                    <Context>
                        <Input>
                            <label for="name1">Enter PLAYER 1 name: </label>
                            <input type='text' id="name1" placeholder='PLAYER1 NAME' size={30} required onChange={(e)=>{setPlayer1Value(e.target.value)}}/>
                        </Input>
                        <Input >
                            <label for="name2">Enter PLAYER 2 name: </label>
                            <input type='text' id="name2" placeholder='PLAYER2 NAME' size={30} value={player2Value} onChange={(e)=>{setPlayer2Value(e.target.value)}} disabled={disabled} required/>
                        </Input>
                    </Context>
                    <Bottom>
                        <input type='submit' onClick={handleClick} value={'SAVE AND NEXT'}></input>
                    </Bottom>
                </form>
        </Content>
        </Container>
    </View>
  )
}

export default Popup

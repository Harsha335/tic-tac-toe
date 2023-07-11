import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
    flex:1;
    color: whitesmoke;
`
const Turn=styled.h1`
    color:#1aead5;
`
const Score=styled.div`
    font-size:25px;
    font-weight:bold;
    margin-top:50px;
    margin-bottom:50px;
    line-height:40px;
`
const Reset=styled.div`
    width:50px;
    margin:auto;
    display: flex;
    border-radius:10px;
    border:1px solid #dce3e6;
    border-right:3px solid #f4f7f9;
    border-bottom:3px solid #eff5f9;
    padding:10px 20px 10px 20px;
    font-size:20px;
    font-weight: bold;
    color:#f9fdf9;
    cursor: pointer;
    background-color: blueviolet;
    &:hover{box-shadow: 3px 3px 3px #872bf0;}
`
const ScoreBoard = ({turn,score,reset}) => 
{
    let current="X";
    if(turn===true){
        current="PLAYER-1 ";
    }
    else{
        current="PLAYER-2 ";
    }
    const {xScore,oScore}=score;
  return (
    <Container>
        <Turn>
            {current}Turn !!
        </Turn>
        <Score>
            PLAYER-1 score : {xScore}<br/>
            PLAYER-2 score : {oScore}
        </Score>
        <Reset onClick={reset}>
            Reset
        </Reset>
    </Container>
  )
}

export default ScoreBoard

import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
    flex:1;
`
const Turn=styled.h1`
    color:green;
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
    border:1px solid #1a6f93;
    border-right:3px solid #141617;
    border-bottom:3px solid #141617;
    padding:10px 20px 10px 20px;
    font-size:20px;
    font-weight: bold;
    color:#131213;
    cursor: pointer;
    background-color: #07b7ec;
    &:hover{box-shadow: 3px 3px 3px #151515;}
`
const ScoreBoard = ({turn,score,reset}) => 
{
    let current="x";
    if(turn===true){
        current="X";
    }
    else{
        current="O";
    }
    const {xScore,oScore}=score;
  return (
    <Container>
        <Turn>
            {current}-Turn !!
        </Turn>
        <Score>
            x-score : {xScore}<br/>
            y-score : {oScore}
        </Score>
        <Reset onClick={reset}>
            Reset
        </Reset>
    </Container>
  )
}

export default ScoreBoard

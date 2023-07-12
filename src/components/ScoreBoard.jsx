import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
    flex:1;
    color: whitesmoke;
`
const Turn=styled.h1`
    color:#1aead5;
text-shadow:1px 1px 2px blueviolet;
`
const Score=styled.div`
    font-size:25px;
    font-weight:bold;
    margin-top:50px;
    margin-bottom:50px;
    line-height:40px;
    `
const Title=styled.div`
    color:#af37e6;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2em;
    text-shadow:1px 1px wheat;
`
const Content=styled.div`
    margin-left:1em;
`
const Label=styled.span`
    /* width: 20px;
    height: 20px; */
`
const Value=styled.span`
    
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
const ScoreBoard = ({turn,score,players,reset}) => 
{
    let current=players[0];
    if(turn===true){
        current=players[0];
    }
    else{
        current=players[1];
    }
    const {player1Score,player2Score}=score;
  return (
    <Container>
        <Turn>
            {current}'s Turn !!
        </Turn>
        <Score>
            <Title>
                SCORE BOARD
            </Title>
            <Content>
                <div>
                    <Label> {players[0]} : </Label><Value> {player1Score}</Value>
                </div>
               <div>
                    <Label> {players[1]} : </Label><Value> {player2Score}</Value>
               </div>
             </Content>
        </Score>
        <Reset onClick={reset}>
            Reset
        </Reset>
    </Container>
  )
}

export default ScoreBoard

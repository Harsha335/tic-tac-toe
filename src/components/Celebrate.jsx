import React from 'react'
import { styled } from 'styled-components'
import Confitte from "react-confetti";
import CloseIcon from '@mui/icons-material/Close';
const Container=styled.div
`
    position:absolute;
    width:98%;
    height:98%;
    margin:10px;
    overflow:hidden;
    border-radius:10px;
    background-color:#08080827;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    z-index:101;
    @media(max-width:768px)
    {
        margin:0;
        width:100%;
        height:100%;
    }
`

const Close=styled.div`
    background-color:#f83131;
    float: right;
    align-self: flex-end;
    border-radius:0 0 0 10px;
    cursor: pointer;
    color:white;
`
const DispWinner=styled.div`
    font-size: 6rem;
    font-weight:bold;
    text-shadow:5px 5px 3px black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    color:#078322;
    text-shadow: 1px 1px 1px black,-1px -1px 1px #aca7a7;
    @media(max-width:768px)
    {
        font-size:30px;
        color:#078322;
        /* background-color: rgba(0,0,0,0.5); */
    }
`
const Celebrate = ({winner,closingCelebrate}) => {
    function closeDisp()
    {
        // const ele=document.getElementById("container");
        // ele.style.display="none";
        closingCelebrate();
    }
  return (
    <Container id="container">
        <Close onClick={closeDisp}>
            <CloseIcon/>
        </Close>
        <Confitte/>
        <DispWinner>
            <div >
                CONGRATULATIONS
            </div>
            <div style={{textAlign:"center"}}>
                {winner}
            </div>
        </DispWinner>
    </Container>
  )
}

export default Celebrate

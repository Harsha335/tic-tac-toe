import React from 'react'
import { styled } from 'styled-components'
import Box from './Box'
const Container=styled.div`
    display: grid;
    grid-template-columns:repeat(3,7em);
    grid-template-rows:repeat(3,7em);
    /* background-color: #84998d;  */
    
`
const Board = ({board,click}) => {
  return (
    <Container>
        {board.map((ele,index)=>{ return <Box value={ele} click={()=> ele===null && click(index)}/>})}
    </Container>
  )
}

export default Board

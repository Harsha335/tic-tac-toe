import React from 'react'
import { styled } from 'styled-components'
const Container=styled.div`
    font-size:10em;
    text-align:center;
    font-family:"Fredoka",sans-serif;
    line-height:0.35em; 
    /* text-align: center; */
    border-radius: 10px;
    background-color:#000000;
    box-shadow: 0 0 8px #4d4d4d;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 15px #565656;
    }
    /* border: 1px solid black; */
    margin:0.5rem;
    color:${(props)=>(props.value=='x' ? "#e53434" : "#4a81ee")};
`
const Box = ({value,click}) => {
  return (
    <Container value={value} onClick={click}>
        {value}
    </Container>
  )
}

export default Box

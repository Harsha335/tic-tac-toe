import React from 'react'
import { styled } from 'styled-components'
const Container=styled.div`
    font-size:10em;
    text-align:center;
    font-family:"Fredoka",sans-serif;
    line-height:0.35em; 
    /* text-align: center; */
    border-radius: 10px;
    background-color:#fff;
    box-shadow: 0 0 8px #888;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 15px #888;
    }
    /* border: 1px solid black; */
    margin:0.5rem;
    color:${(props)=>(props.value=='x' ? "#cd0404" : "#0d53e0")};
`
const Box = ({value,click}) => {
  return (
    <Container value={value} onClick={click}>
        {value}
    </Container>
  )
}

export default Box

import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
    width:265px;
    height:280px;
    background-color: whitesmoke;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    margin:20px;
    &:hover{
        transform: scale(1.01,1.02) ;
        transition: transform 0.1s ease-in-out;
    }
`
const Image=styled.img`
    height: 83%;
    object-fit: cover;
    background-color: white;
    
`
const Text=styled.div`
    background-color: #186f5f;
    height: 20%;
    width: 100%;

    position: absolute;     //make it bottom it is not working
    bottom:0;

    border-radius: 10px;
    font-size:2em;
    /* padding:10px; */
    text-align: center;
    /* vertical-align:center; */
    ${mobile({fontSize:"1.5em"})};
`
const Card = ({image,text}) => {
  return (
    <Container>
        <Image src={image} width={"100%"}>
        </Image>
        <Text>
            {text}
        </Text>
    </Container>
  )
}

export default Card

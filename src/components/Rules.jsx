import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import boardImg from '../images/board.jpeg'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { yellow } from '@mui/material/colors';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Footer from './Footer';
import { mobile } from '../responsive';

const Container=styled.div`
    padding:0 2.5em;
    ${mobile({padding:"0 10px 0 10px"})};
    line-height: 2em;
    ${mobile({lineHeight:"1.5em"})};
    margin-bottom:30px ;
    color:whitesmoke
`
const Image=styled.img`
    width:140px;
    ${mobile({display:"none"})};
`
const Title=styled.div`
    font-size:2.5em;
    font-weight:bold;
    border-left: 5px solid #291392;
    padding:10px;
    margin-top:1em;
`
const Wrap=styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 2em;
    padding-left:2em ;
`
const Content=styled.div`
    font-size: 1.2em;
`
const Rules = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Title>
            Tic Tac Toe
        </Title>
        <Wrap>
            <Content>
                You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? 
                That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!
                <br/>
                Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.
            </Content>
            <Image src={boardImg}></Image>
        </Wrap>
        <Title>
            Rules
        </Title>
        <Wrap>
            <Content>
            Tic Tac Toe is a simple game that is played on a 3x3 grid. The game is played by two players who take turns marking the spaces in a 3x3 grid with X or O.
            The player who succeeds in placing three of their marks in a horizontal, vertical,
            or diagonal row wins the game. If all nine squares are filled and neither player has won, the game is a draw.
            <br/>
            Here are the rules for Tic Tac Toe:
            <ul>
                <li>
                    The game is played on a grid that's 3 squares by 3 squares.
                </li>
                <li>
                    You are X, your friend (or the computer in this case) is O.
                </li>
                <li>
                    Players take turns putting their marks in empty squares.
                </li>
                <li>     
                    The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
                </li>
                <li>
                    When all 9 squares are full, the game is over.    
                </li>
            </ul>
            </Content>
        </Wrap>
            <Title>
                Tips and Tricks <EmojiObjectsIcon sx={{ color: yellow[500] }}/>
            </Title>
        <Wrap>
                <Content>
                To beat the computer (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.
                Part of your strategy is trying to figure out how to get three X s in a row. The other part is trying to figure out how to stop the computer from getting three O s in a row.
                After you put an X in a square, you start looking ahead. Where's the best place for your next X ? You look at the empty squares and decide which ones are good choices 
                which ones might let you make three X s in a row.
                You also have to watch where the computer puts its O . That could change what you do next. If the computer gets two O s in a row, you have to put your next X 
                in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.
                If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.
                </Content>
        </Wrap>
    </Container>
    <Footer/>
    </>
  )
}

export default Rules

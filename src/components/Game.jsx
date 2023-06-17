import React,{useState} from 'react'
import styled from 'styled-components'
// import "./Game.css"
import Board from './Board'
import ScoreBoard from './ScoreBoard'

const Container=styled.div`margin: -5px;
    padding: 0;
    background-color:#eae3e3;
`
const Title=styled.div`
    font-size:45px;
    font-weight:bold;
    color:whitesmoke;
    width: 100%;
    height: 8vh;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:blueviolet;
`
const Gamepad=styled.div`
    display: flex;
    /* width: 100vw; */
    height: 90vh;
    overflow:auto;
`
const PlayBoard=styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
    `
// const Board=styled.div`
//     display: grid;
//     grid-template-columns:repeat(3,7em);
//     grid-template-rows:repeat(3,7em);
//     /* background-color: #84998d;  */
    
// `
// const Box=styled.div`
//     font-size:10em;
//     /* font-weight:bold; */
//     text-align:center;
//     font-family:"Fredoka",sans-serif;
//     line-height:0.8em;
//     &:nth-child(1),&:nth-child(2),&:nth-child(3){
//         border-bottom:5px solid black;
//     }
//     &:nth-child(1),&:nth-child(4),&:nth-child(7){
//         border-right:5px solid black;
//     }
//     &:nth-child(3),&:nth-child(6),&:nth-child(9){
//         border-left:5px solid black;
//     }
//     &:nth-child(7),&:nth-child(8),&:nth-child(9){
//         border-top:5px solid black;
//     }
//     &:hover{
//         background-color:#ece4e4;
//     }
    
// `
// const ScoreBoard=styled.div`
//     flex:1;
//     /* background-color:red; */
// `
const Game = () => {
    const [board,setBoard]=useState(Array(9).fill(null))
    const [gameOver,setGameOver]=useState(false);
    const [winner,setWinner]=useState("draw");
    const WIN_Condition=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    const [score,setScore]=useState({xScore:0,oScore:0})
    // const board=["x","x","x","x","x","x","x","x","x"];
    const [xPlaying,setXPlaying]=useState(true);
    const handle=(id)=>{
        const updateBoard=board.map((value,index)=>
        {
            if(index===id){
                return xPlaying===true ? "x" :"o";
            }
            else{
                return value;
            }
        })
        const winner=checkWinner(updateBoard);
        if(winner){
            if(winner==="o"){
                let {oScore}=score;
                oScore+=1;
                setScore({...score,oScore})              
            }
            else{
                let {xScore}=score;
                xScore+=1;
                setScore({...score,xScore})   
            }
            setWinner(winner);
            setGameOver(true);
        }
        setBoard(updateBoard);
        setXPlaying(!xPlaying);
    }
    const checkWinner=(board)=>{
        for(let i=0;i<8;i++)
        {
            const [x,y,z]=WIN_Condition[i];
            if( board[x] && (board[x]===board[y]) && (board[y]==board[z]))
            {
                return board[x];
            }
        }
    }
    const resetBoard=()=>{
        // setTimeout()
        setGameOver(false);
        alert(winner);
        setBoard(Array(9).fill(null));
        setScore({xScore:0,oScore:0})
        setWinner("draw");
    }
    // if(gameOver) {
    //     const {xScore,oScore}=score;
    //     resetBoard()
    //     setScore({xScore,oScore})
    // };
  return (
    <Container>
        <Title> Tic-Tac-Toe</Title>
        <Gamepad>
            <PlayBoard>
                <Board board={board} click={gameOver ? resetBoard : handle}/>
                    {/* <Box value="x" onClick={null}/> */}
                    {/* {board.map((ele,index)=>{ return <Box value={ele} onClick={handle(index)}/>})} */}
                    {/* <Box id="0" onClick={handle(0)}>{board[0]}</Box>
                    <Box id="1" onClick={handle(1)}>{board[1]}</Box>
                    <Box id="2" onClick={handle(2)}>{board[2]}</Box>
                    <Box id="3" onClick={handle(3)}>{board[3]}</Box>
                    <Box id="4" onClick={handle(4)}>{board[4]}</Box>
                    <Box id="5" onClick={handle(5)}>{board[5]}</Box>
                    <Box id="6" onClick={handle(6)}>{board[6]}</Box>
                    <Box id="7" onClick={handle(7)}>{board[7]}</Box>
                    <Box id="8" onClick={handle(8)}>{board[8]}</Box> */}
            </PlayBoard>
            <ScoreBoard turn={xPlaying} score={score} reset={resetBoard}/>
        </Gamepad>
    </Container>
  )
}

export default Game

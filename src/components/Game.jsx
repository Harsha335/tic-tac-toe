import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
// import "./Game.css"
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import Celebrate from './Celebrate'

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
    @media(max-width:768px)
    {
        flex-direction: column-reverse;
        margin: 2%;
    }
`
const PlayBoard=styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Game = () => {
    const [board,setBoard]=useState(Array(9).fill(null))
    const [aiBoard,setAiBoard]=useState(true);
    if(aiBoard)
    {
        const humanValue='x';
        const aiValue='o';//DEVELOP
    }
    // const [gameOver,setGameOver]=useState(false);
    const [winner,setWinner]=useState("draw");
    const [celebrate,setCelebrate]=useState(false);
    const WIN_Condition=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    const [score,setScore]=useState({xScore:0,oScore:0})
    // const board=["x","x","x","x","x","x","x","x","x"];
    const [xPlaying,setXPlaying]=useState(true);
    const handle=(id)=>{
        // if(gameOver)return;
        const updateBoard=board.map((value,index)=>
        {
            if(index===id){
                return xPlaying===true ? "x" :"o";
            }
            else{
                return value;
            }
        });
        setBoard(updateBoard);
        setXPlaying(!xPlaying);
    };
    useEffect(()=>{
        const win=checkWinner(board);
        if(win)
        {
            if(win==="o"){
                let {oScore}=score;
                oScore+=1;
                setScore({...score,oScore})              
            }
            else{
                let {xScore}=score;
                xScore+=1;
                setScore({...score,xScore})   
            }
            setWinner(win);
            // setGameOver(true); 
            setCelebrate(true);
        }
    },[board]);
    const checkWinner=(board)=>{
        let allFilled=true;
        for(let i=0;i<8;i++)
        {
            const [x,y,z]=WIN_Condition[i];
            if(board[x]==null)allFilled=false;
            if( board[x] && (board[x]===board[y]) && (board[y]==board[z]))
            {
                return board[x];
            }
        }
        if(allFilled)setCelebrate(true);
        return null;
    }
    const resetBoard=()=>{
        // setGameOver(false);
        // alert(winner);
        setScore({xScore:0,oScore:0})
        closingCelebrate();
    }
    // if(gameOver) {
    //     setCelebrate(true);
    //     setGameOver(false);
    //     const {xScore,oScore}=score;
    //     alert(winner+"....");
    //     setBoard(Array(9).fill(null));
    //     setWinner("draw");
    //     setScore({xScore,oScore});
    // }
    if(celebrate)
    {
        document.getElementById("gamepad").style.filter="blur(2px)";
    }
    function closingCelebrate(){
        document.getElementById("gamepad").style.filter="none";
        setCelebrate(false);
        setBoard(Array(9).fill(null));
        setWinner("draw");
    }
  return (
    <Container>
        {(celebrate)?<Celebrate winner={winner} closingCelebrate={closingCelebrate}/>:null}
        <Title> Tic-Tac-Toe</Title>
        <Gamepad id="gamepad">
            <PlayBoard>
                <Board board={board} click={handle}/>
            </PlayBoard>
            <ScoreBoard turn={xPlaying} score={score} reset={resetBoard}/>
        </Gamepad>
    </Container>
  )
}

export default Game

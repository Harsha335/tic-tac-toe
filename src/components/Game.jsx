import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
// import "./Game.css"
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import Celebrate from './Celebrate'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import bg2 from '../images/bg7.jpg'
import bg from '../images/bg1.jpg'
import { mobile } from '../responsive'

const Container=styled.div
`  padding: 0;
    background-color:#131313;
    ${mobile({backgroundImage:`url(${bg})`})};
    background-image:url(${bg2});
    background-size:100%;
    ${mobile({backgroundSize:"210%"})};
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
const Game = ({isAI}) => {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [searchParams,setSearchParams]=useSearchParams();
    const player1=searchParams.get('player1');
    const player2=searchParams.get('player2');
    // const [aiBoard,setAiBoard]=useState(true);
    const player1Value='x'; //taken human as "x"
    const player2Value='o';//DEVELOP
    // if(aiBoard)
    // {
    //     const humanValue='x'; //taken human as "x"
    //     const aiValue='o';//DEVELOP
    // }
    // const [gameOver,setGameOver]=useState(false);
    const [winner,setWinner]=useState("DRAW");
    const [celebrate,setCelebrate]=useState(false);
    const WIN_Condition=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    const [score,setScore]=useState({player1Score:0,player2Score:0})
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
        // setXPlaying(!xPlaying);  //unlock it
        setXPlaying(!xPlaying);
    };
    useEffect(()=>{
        const win=checkWinner(board);
        if(win)
        {
            if(win==="o"){
                let {player2Score}=score;
                player2Score+=1;
                setScore({...score,player2Score})              
            }
            else{
                let {player1Score}=score;
                player1Score+=1;
                setScore({...score,player1Score})   
            }
            setWinner(win=="x"?player1:player2);
            // setGameOver(true); 
            setCelebrate(true);
        }
    },[board]);
    const checkWinner=(board)=>{
        let allFilled=true;
        for(let i=0;i<8;i++)
        {
            const [x,y,z]=WIN_Condition[i];
            if(board[i]===null)allFilled=false;
            if( board[x] && (board[x]===board[y]) && (board[y]===board[z]))
            {
                return board[x];
            }
        }
        if(allFilled) setCelebrate(true);
        return null;
    }
    const resetBoard=()=>{
        // setGameOver(false);
        // alert(winner);
        setScore({player1Score:0,player2Score:0})
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
        setWinner("DRAW");
    }
    //ai
    useEffect(()=>{
        // alert(isAI);
        if(isAI=='True' && !xPlaying)
        {
            // alert("aiMove");
            aiMove();
        }
    },[board,xPlaying,isAI]);
    function aiMove()
    {
        const updatedBoard=[...board];
        //check to keep at center
        if(board[4]==null)
        {
            updatedBoard[4]=player2Value;   //aiValue 'o'
            setBoard(updatedBoard);
            setXPlaying(!xPlaying);
            return;
        }
        //can i win
        for(let i=0;i<8;i++)
        {
            const [x,y,z]=WIN_Condition[i];
            let count = 0;
            if (board[x] === player2Value) count++;
            if (board[y] === player2Value) count++;
            if (board[z] === player2Value) count++;
            if (count === 2)
            {
                 for(let ind of [x,y,z])
                 {
                     if(board[ind]==null)
                    {
                        updatedBoard[ind]=player2Value;
                        setBoard(updatedBoard);
                        setXPlaying(!xPlaying);
                        return;
                    }
                }
            }
        }
        //can opponent win block
        for(let i=0;i<8;i++)
        {
            const [x,y,z]=WIN_Condition[i];
            let count = 0;
            if (board[x] === player1Value) count++;
            if (board[y] === player1Value) count++;
            if (board[z] === player1Value) count++;
            if (count === 2) 
            {
                for(let ind of [x,y,z])
                {
                    if(board[ind]==null)
                    {
                        updatedBoard[ind]=player2Value;
                        setBoard(updatedBoard);
                        setXPlaying(!xPlaying);
                        return;
                    }
                }
            }
        }
        //random
        let emptyCells=new Array();
        for(let i=0;i<8;i++)
        {
            if(board[i]==null)
            {
                emptyCells.push(i);
            }
        }
        const randomIndex=Math.floor(Math.random()*emptyCells.length);
        const aiMoveIndex=emptyCells[randomIndex];
        updatedBoard[aiMoveIndex]=player2Value;
        setBoard(updatedBoard);
        setXPlaying(!xPlaying);
    }
  return (
    <Container>
        {(celebrate)?<Celebrate winner={winner} closingCelebrate={closingCelebrate}/>:null}
        <Navbar/>
        <Gamepad id="gamepad">
            <PlayBoard>
                <Board board={board} click={handle}/>
            </PlayBoard>
            <ScoreBoard turn={xPlaying} score={score} players={[player1,player2]} reset={resetBoard}/>
        </Gamepad>
    </Container>
  )
}

export default Game

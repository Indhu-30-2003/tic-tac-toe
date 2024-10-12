import { useState } from "react";
function Square({value ,onSquareClick}){
 
  
  return( <><button className="square" onClick={onSquareClick}>{value}</button></>
  )}
function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

function Board() {
  const [xnext,setxnext]=useState(true)
  const [square,setsquare] =useState(Array(9).fill(null))
  function handleclick(i){
    if(square[i] || calculateWinner(square)){
      return
    }
    const newsquare=square.slice()
    if(xnext){
      newsquare[i]="X"}
     
    else{
      newsquare[i]="O"
    
    }
    setsquare(newsquare)
    setxnext(!xnext)
    
  }
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xnext ? "X" : "O");
  }

  return (

   <>
   <h1 className="heading">Tic-Tac-Toe Game</h1>
   <div className="container">
     <div className="status">{status}</div>
    <div className="board-row">
   <Square value={square[0]} onSquareClick={()=>handleclick(0)}/>
   <Square  value={square[1]}  onSquareClick={()=>handleclick(1)}/>
   <Square  value={square[2]} onSquareClick={()=>handleclick(2)} />

 </div>
 <div className="board-row">
 <Square  value={square[3]} onSquareClick={()=>handleclick(3)} />
 <Square  value={square[4]} onSquareClick={()=>handleclick(4)}/>
 <Square  value={square[5]} onSquareClick={()=>handleclick(5)}/>
 </div>
 <div className="board-row">
 <Square  value={square[6]} onSquareClick={()=>handleclick(6)}/>
 <Square value={square[7]} onSquareClick={()=>handleclick(7)}/>
 <Square  value={square[8]} onSquareClick={()=>handleclick(8)}/>
 </div>
   </div>
   </>
  );
}

export default Board;

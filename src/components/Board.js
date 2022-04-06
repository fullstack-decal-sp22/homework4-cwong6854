import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isxNext, setNext] = useState(true);
    const winner = calculateWinner(squares);

    const status = 'Next player: ' + (isxNext ? "X" : "O");
    
    function renderSquare(i) {
        return (
        <Square 
          value={squares[i]}
          onClick={() => handleClick(i)}/>
        );
    }

    function handleClick(i) {
      // If there is a winner, return nothing so game stops
      if (calculateWinner(squares)) {
        return;
      }
      let square = squares.slice();
      square[i] = isxNext ? "X" : "O";
      setSquare(square)
      setNext(!isxNext);
      
    }

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
        const [one, two, three] = lines[i];
        if (square[one] && square[one] === squares[two] && square[one] === square[three]) {
          return "The winner is: " + square[one];
        }
      }
      return null;
    }

    return (  
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="winner">{winner}</div>
        </div>
    )
}

export default Board;


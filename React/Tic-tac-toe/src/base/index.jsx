import { useState } from 'react';
import { Link } from 'react-router-dom';
// 单个棋盘方格
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
// 棋盘
function Board() {
  // 默认从x开始
  const [xIsNext, setXIsNext] = useState(true);
  // 记录棋盘落子
  const [squares, setSquares] = useState(Array(9).fill(null));
  //修改显示的文本 i = 点击的棋盘方格的索引
  function handleClick(i) {
    // 如果点击的方格已经有值了不允许落子｜｜已经有获胜者
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    // 下次走棋的玩家
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  // 宣布获胜者
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 整个十字棋应用
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info"></div>
    </div>
  );
}

// 根据棋盘落子计算获胜者
function calculateWinner(squares) {
  // 胜利的排列组合
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // 遍历每种可能出现的结果
  for (let i = 0; i < lines.length; i++) {
    // 拿到获胜的组合在棋盘中出现的的索引计算出获胜者
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

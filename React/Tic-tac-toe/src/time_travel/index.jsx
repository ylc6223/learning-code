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
function Board({ xIsNext, squares, onPlay }) {
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
    onPlay(nextSquares);
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
  // 存放快照的数组
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 跟踪用户当前正在查看的步骤
  const [currentMove, setCurrentMove] = useState(0);
  // 默认从x开始
  const xIsNext = currentMove % 2 === 0;
  // 当前快照
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];

  // 子组件落子时被调用，保存快照，记录索引，该谁落子可以根据索引计算出来
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    // 当前步骤 = 历史记录最后一项
    setCurrentMove(nextHistory.length - 1);
  }

  // 回放快照,后面的全丢弃
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // 回放操作列表
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">{<ol>{moves}</ol>}</div>
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

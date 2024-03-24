import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); //初始化第一次数据
  // const [xIsNext, setXIsNext] = useState(true);//冗余
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // const currentSquares = history[history.length - 1]; //历史记录最后一条就是最新记录
  const currentSquares = history[currentMove]; //根据当前步骤来进行渲染
  //负责更新square
  function handlePlay(nextSquares) {
    //接受来自子组件的nextSquares
    // TODO
    //回退版本 = 当前版本号+1 slice方法不包含结尾，要删除回退往后的版本
    // const nextHistory = [...history.slice(), nextSquares];
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); //延续上次的进度
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext); //取反
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
    // TODO
  }
  //移动快照
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
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
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // 检查该方块是否已经具有 X 或 O 值||是否已有获胜者
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //未有获胜者
    const nextSquares = squares.slice(); //每次点击后修改之前:都先保存一份快照再做实际修改
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "O";
    }
    //通知父组件调用play方法
    onPlay(nextSquares);
  }
  // 计算获胜者
  console.log("reExecute");
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {squares.map((item) => {})}
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

// 计算获胜者,接收棋盘
function calculateWinner(squares) {
  //获胜的多种可能排列组合 数组成员为获胜的棋子的坐标
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
  // 遍历所有可能出现的结果
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; //解构出现的坐标
    //比较三个坐标是否相同
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; //计算出获胜者
    }
  }
  //未计算出获胜者
  return null;
}

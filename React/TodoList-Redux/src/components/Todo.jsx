import React,{useContext} from 'react';
import clsx from 'clsx';
import {ctx} from "./appContext"
// 渲染单个 todo 的组件
const Todo = ({ todo }) => {
  const toggleTodo = useContext(ctx);
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? '👌' : '👋'}{' '}
      <span
        className={clsx('todo-item__text', {
          'todo-item__text--completed': todo && todo.completed,
        })}
      >
        {todo.content}
      </span>
    </li>
  );
}

export default Todo;

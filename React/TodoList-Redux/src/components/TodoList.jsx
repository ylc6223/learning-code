import React from 'react';
import Todo from './Todo';
import { ctx } from "./appContext"
// 一个渲染 todos 列表的组件
// 这告诉 React：“如果 <TodoList> 内的任何组件请求 ctx ，
// 请给他们这个 toggleTodo 。”该组件将使用其上方 UI 树中最近的 <ctx.Provider> 的值。
const TodoList = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        const ele = <ctx.Provider key={`todo-${todo.id}`} value={toggleTodo}>
          <Todo todo={todo} />
        </ctx.Provider>
        return ele
      })
      : 'No todos, yay!'}
  </ul>
);

export default TodoList;

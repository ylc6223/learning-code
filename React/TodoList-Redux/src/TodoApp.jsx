import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import { VISIBILITY_FILTERS } from "./constants";
import './styles.css';
// 要跨组件传值 AddTodo填写的值要展示在TodoList中
// TodoList的展示要根据VisibilityFilters选择的条件进行筛选
let todoList = [
  {
    id: 1,
    completed: true,
    content: '今天天气真好',
  },
  {
    id: 2,
    completed: false,
    content: '准备吃什么呢',
  },
  {
    id: 3,
    completed: true,
    content: '我也不知道吃什么',
  },
  {
    id: 4,
    completed: false,
    content: '咋办啊',
  },
  {
    id: 5,
    completed: true,
    content: '好想吃肯德基',
  },
  {
    id: 6,
    completed: false,
    content: '可是烤鱼也很好吃',
  },
]
export default function TodoApp() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [todos, setTodos] = useState(todoList.slice())
  //添加待办事项
  const addTodo = (todoItem) => {
    //不能够直接修改原数据 state被认为是只读的，应该替换它而不是改变现有的
    setTodos((todos) => {
      todoList = [...todos, {
        id: todos.length + 1,
        completed: false,
        content: todoItem,
      }]
      const res = [...todos, {
        id: todos.length + 1,
        completed: false,
        content: todoItem,
      }]
      return res
    })
  }

  // 选择过滤条件
  const setFilter = (filter) => {
    setActiveFilter(filter)
    const filterTodos = getTodosByVisibilityFilter(filter)
    //要避免直接修改原数组，所以这个列表应该由条件计算出来 
    setTodos(todos => [...filterTodos])
  }
  //过滤条件发生更改时重新进行过滤
  const getTodosByVisibilityFilter = (visibilityFilter) => {
    const allTodos = todoList.slice();//浅拷贝
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter(todo => !todo.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos;
    }
  }

  //更改待办事项完成状态
  const toggleTodo = (id) => {
    const todo = todoList.filter(todo => todo.id === id)[0]
    todo.completed = !todo.completed
    //重新进行过滤
    const filterTodos = getTodosByVisibilityFilter(activeFilter)
    //要避免直接修改原数组，所以这个列表应该由条件计算出来 
    setTodos(todos => [...filterTodos])
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {/* 添加按钮 */}
      <AddTodo addTodo={addTodo} />
      {/* 记录列表 */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* 分类筛选 */}
      <VisibilityFilters activeFilter={activeFilter} setFilter={setFilter} />
    </div>
  );
}

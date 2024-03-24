import React from 'react';
// import { addTodo } from "../redux/actions";
//允许用户输入代办事项并通过点击 Add Todo 按钮添加到列表中的组件
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '', //s输入框初始值
    };
  }
  //更新输入框的值
  updateInput = (input) => {
    this.setState({ input });
  };
  //添加完要清空
  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './TodoApp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);


// React Redux 提供一个 connect 函数使你可以读取 Redux store（并且当 store 更新时会再次去读取值）的值。

// connect 函数接收两个参数，都是可选的：

// mapStateToProps：在每一次 store state 改变时被调用。

// mapDispatchToProps: 此参数可以是一个 function，或者一个 object。

// 如果它是 function，会在 component 创建时立马被调用。
// 如果它是object


// const mapStateToProps = (state, ownProps) => ({
//   // ...依据 state 和 自定义 ownProps 生成 computed data
// });

// const mapDispatchToProps = {
//   // ... 通常是一个充满 action creators 的 object
// };

// // `connect` 返回一个接收要包装的组件的新函数：
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// // 并且该函数返回连接的，包装的组件：
// const ConnectedComponent = connectToStore(Component);

// // 通常我们会将两者一步完成，像这样：
// connect(mapStateToProps, mapDispatchToProps)(Component);

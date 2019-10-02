import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Title from './components/Title';
import MultipInput from './components/Multip/MultipInput'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducerCreator from './reducers';
import { fetchTodosFromServer } from './actions';
import thunk from 'redux-thunk';
import { logger, crashReporter } from './middlewares';


interface InitInterface {
  todos: any,
  isFetchingTodoList: any,
  error: any,
}

// todo state初始值
const initTodoState: InitInterface = {
  todos: [],
  isFetchingTodoList: false,
  error: null,
};

// 建立Store
const store = createStore(
  todoReducerCreator(initTodoState),
  applyMiddleware(thunk, logger, crashReporter)
);


class ReduxFullApp extends Component {
  // 啟動時,抓後端資料
  componentDidMount() {
    store.dispatch(fetchTodosFromServer());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Title />
          <TodoForm />
          <TodoList /> */}
          <MultipInput />
        </div>
      </Provider>
    );
  }
}

export default ReduxFullApp;

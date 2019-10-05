import React, { Component } from 'react';
import './App.css';
import Vaild_Home from './components/DataVaild/Vaild_Home';
import Multip_Home from './components/Search/Multip_Home';
import Summaryhome from './components/summary/Summaryhome';
import MultipInput from './components/Multip/MultipInput'
import PageflowHome from './components/FlowPage/Pageflow_home'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducerCreator from './reducers';
import { fetchTodosFromServer } from './actions';
import thunk from 'redux-thunk';
import { logger, crashReporter } from './middlewares';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backImage from './images.jpg'
import { StylesContext } from '@material-ui/styles/StylesProvider';

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backImage})`,
};

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
        <div className="App" style={sectionStyle}>
          <header className={'titlePage'}>
            測試專案DEMO
          </header>
          <Router>
            <section>
              <div>
                <nav>
                  <ul>
                    <li className={'liStyle'}>
                      <Link to="/">
                        <h3>1. 資料查詢系統</h3>
                      </Link>
                    </li>
                    <li className={'liStyle'}>
                      <Link to="/MultipInput/">
                        <h3>2. 資料新增與修改系統</h3>
                      </Link>
                    </li>
                    <li className={'liStyle'}>
                      <Link to="/PageflowHome/">
                        <h3>3. 資料頁面流系統</h3>
                      </Link>
                    </li>
                    <li className={'liStyle'}>
                      <Link to="/Summaryhome/">
                        <h3>4. 用戶繳費圖系統</h3>
                      </Link>
                    </li>
                    <li className={'liStyle'}>
                      <Link to="/VaildHome/">
                        <h3>5. 資料驗證系統</h3>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <hr />
              <div>
                <Route path="/" exact={true} component={Multip_Home} />
                <Route path="/MultipInput/" component={MultipInput} />
                <Route path="/PageflowHome/" component={PageflowHome} />
                <Route path="/Summaryhome/" component={Summaryhome} />
                <Route path="/VaildHome/" component={Vaild_Home} />
              </div>
            </section>
          </Router>
          <footer>
            <p>
              <b>©2019 Test Project</b>
            </p>
            <p>Eric Chen</p>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default ReduxFullApp;

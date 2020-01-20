import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo, fetchTodosDeleteSubmitServer, removeAllTodo, fetchTodosOneFromServer, axiosService, axiosAllService, axiosMultipAllService, nameState, moneyState, descState } from '../../actions';
import Button from '@material-ui/core/Button';
import './FromStyle.css';

interface Props {
  addTodo: any
  removeAllTodo: any
  fetchTodosOneFromServer: any
  axiosService: any
  axiosAllService: any
  axiosMultipAllService: any
}

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const handleClick: any = (e, props) => {
  e.preventDefault();
  props.removeAllTodo();
  props.fetchTodosOneFromServer();
}

const handleBantchClick: any = (value, e, props) => {
  e.preventDefault();
  props.removeAllTodo();
  props.axiosMultipAllService(value);
  value = '';
}

const getMsg: any = msg => {
  let input = ''
  if (msg === 1) {
    input = 'O'
  } else if (msg === 2) {
    input = 'X'
  } else {
    input = ''
  }
  return input
}

const Form = (props) => {
  const { msg1, msg2, msg3, handleClearMag } = props
  let input: any = '';
  const classes = useStyles();
  let liStypeA
  let liStypeB
  let liStypeC

  if (msg1 === 1) {
    liStypeA = 'StypeSuccess'
  } else if (msg1 === 2) {
    liStypeA = 'StypeBad'
  }
  if (msg2 === 1) {
    liStypeB = 'StypeSuccess'
  } else if (msg2 === 2) {
    liStypeB = 'StypeBad'
  }
  if (msg3 === 1) {
    liStypeC = 'StypeSuccess'
  } else if (msg3 === 2) {
    liStypeC = 'StypeBad'
  }

  return (
    <form
      onSubmit={e => {
        handleBantchClick(input.value, e, props);
        input.value = '';
      }}
    >
      <b>輸入繳費編號NO:</b> <input
        className="form-control col-md-12"
        ref={node => {
          input = node;
        }}

      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={e => {
          handleBantchClick(input.value, e, props);
          input.value = '';
        }}
      >
        點擊驗證
      </Button>
      <div>
        {props.isSuccessDelete}
      </div>
      <br />
      ex: 請先逐步完成所有驗證資料,方可執行繳費功能
      <ul>
        <li className={liStypeA}>名字 不能包含 數字 {getMsg(msg1)}</li>
        <li className={liStypeB}>金額 不能大於 5位數 {getMsg(msg2)}</li>
        <li className={liStypeC}>說明 不能小於 3個字 {getMsg(msg3)}</li>
      </ul>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={e => {
          handleClick(e, props);
          input.value = '';
          handleClearMag();
        }}
      >刷新頁面</Button>
    </form>
  );
}
// 待辦事項清單列表
class VaildTodoForm extends React.Component<any, any> {
  // 清空驗證狀態
  handleClearMag = () => {
    this.props.nameState(3);
    this.props.moneyState(3);
    this.props.descState(3);
  }

  render() {
    const { msg1, msg2, msg3 } = this.props
    let isSuccessDelete = <div></div>

    if (msg1 === 1 && msg2 === 1 && msg3 === 1) {
      isSuccessDelete =
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              this.props.fetchTodosDeleteSubmitServer(this.props.todos[0].id)
              location.reload();
            }}
          >繳款送出</Button>
          <br />
          <b>送出後這筆資料將從資料庫被移除</b>
        </div>
    }

    return ( // axiosAllService  axiosMultipAllService
      <Form
        removeAllTodo={this.props.removeAllTodo}
        fetchTodosOneFromServer={this.props.fetchTodosOneFromServer}
        axiosMultipAllService={this.props.axiosMultipAllService}
        msg1={msg1}
        msg2={msg2}
        msg3={msg3}
        handleClearMag={this.handleClearMag}
        isSuccessDelete={isSuccessDelete}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    msg1: state.msg1,
    msg2: state.msg2,
    msg3: state.msg3,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    },
    removeAllTodo: () => {
      dispatch(removeAllTodo());
    },
    fetchTodosOneFromServer: (id) => {
      dispatch(fetchTodosOneFromServer(id));
    },
    axiosService: (id) => {
      dispatch(axiosService(id));
    },
    axiosAllService: () => {
      dispatch(axiosAllService());
    },
    axiosMultipAllService: (id) => {
      dispatch(axiosMultipAllService(id));
    },
    nameState: (data) => {
      dispatch(nameState(data));
    },
    moneyState: (data) => {
      dispatch(moneyState(data));
    },
    descState: (data) => {
      dispatch(descState(data));
    },
    fetchTodosDeleteSubmitServer: (id) => {
      dispatch(fetchTodosDeleteSubmitServer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VaildTodoForm);

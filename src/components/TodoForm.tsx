import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo, fetchTodosOneFromServer, removeAllTodo } from '../actions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

interface Props {
  addTodo: any
  removeAllTodo: any
  fetchTodosOneFromServer: any
}

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);
const Form = (props) => {
  let input: any = '';
  const classes = useStyles();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.removeAllTodo();
        props.fetchTodosOneFromServer(input.value);
        console.log('1.input.....', input.value);
        input.value = '';
      }}
    >
      <input
        className="form-control col-md-12"
        ref={node => {
          input = node;
        }}
      />
      <Button variant="contained"
        color="primary"
        className={classes.button}
        onClick={e => {
          e.preventDefault();
          props.removeAllTodo();
          props.fetchTodosOneFromServer(input.value);
          console.log('1.input.....', input.value);
          input.value = '';
        }}
      >
        編號查詢(無輸入查詢全部)
        <Icon className={classes.rightIcon}>Click</Icon>
      </Button>
      <br />
    </form>
  );
}
// 待辦事項清單列表
class TodoForm extends React.Component<Props, any> {

  render() {
    return (
      <Form removeAllTodo={this.props.removeAllTodo} fetchTodosOneFromServer={this.props.fetchTodosOneFromServer} />
    )
  }
}

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
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);

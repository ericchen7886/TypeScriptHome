import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo, removeAllTodo, fetchTodosOneFromServer } from '../../actions';
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
  }),
);

const handleClick: any = (value, e, props) => {
  e.preventDefault();
  props.removeAllTodo();
  props.fetchTodosOneFromServer(value);
  value = '';
}

const handleBantchClick: any = (value, e, props) => {
  e.preventDefault();
  props.removeAllTodo();
  props.axiosMultipAllService();
  value = '';
}

const Form = (props) => {
  let input: any = '';
  const classes = useStyles();
  return (
    <form
      onSubmit={e => {
        handleClick(input.value, e, props);
        input.value = '';
      }

      }
    >
      <b>輸入編號NO.查詢:</b> <input
        className="form-control col-md-12"
        ref={node => {
          input = node;
        }}

      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={e => {
          handleClick(input.value, e, props);
          input.value = '';
        }}
      >
        查詢
      </Button>

      (ex:空白則查詢全部))
    </form>
  );
}
// 待辦事項清單列表
class TodoForm extends React.Component<Props, any> {

  render() {
    return ( // axiosAllService  axiosMultipAllService
      <Form
        removeAllTodo={this.props.removeAllTodo}
        fetchTodosOneFromServer={this.props.fetchTodosOneFromServer}
      />
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
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);

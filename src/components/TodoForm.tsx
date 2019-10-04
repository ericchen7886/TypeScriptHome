import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo, removeAllTodo, fetchTodosOneFromServer, axiosService, axiosAllService, axiosMultipAllService } from '../actions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
        // props.axiosMultipAllService();
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
          input.value = '';
        }}
      >
        編號查詢(無輸入查詢全部)
        <Icon className={classes.rightIcon}>0</Icon>
      </Button>
      <Button variant="contained"
        color="primary"
        className={classes.button}
        onClick={e => {
          e.preventDefault();
          props.removeAllTodo();
          props.axiosMultipAllService();
          input.value = '';
        }}
      >
        點擊後多筆查詢(id編號1,2,3)
        <Icon className={classes.rightIcon}>0</Icon>
      </Button>
      <br />
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
        axiosMultipAllService={this.props.axiosMultipAllService} />
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
    axiosService: (id) => {
      dispatch(axiosService(id));
    },
    axiosAllService: () => {
      dispatch(axiosAllService());
    },
    axiosMultipAllService: () => {
      dispatch(axiosMultipAllService());
    },


  };
};

export default connect(null, mapDispatchToProps)(TodoForm);

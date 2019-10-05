import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker } from '@progress/kendo-react-dateinputs';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      backgroundColor: '#f8ff92',
    },
    table: {
      minWidth: 650,
      border: '2px solid red',
    },
    row: {
      border: '2px solid red',
    }
  }),
);



const SimpleTable = (props) => {
  const { todos, date, handleDateChange } = props;
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell >id</TableCell>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">money</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, idx) => (
            <TableRow className={classes.row} key={todo.id}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="right">{todo.id}</TableCell>
              <TableCell align="right">{todo.name}</TableCell>
              <TableCell align="right">{todo.money}</TableCell>
              <TableCell align="right">{todo.description}</TableCell>
              <TableCell align="right">
                <DatePicker
                  value={date}
                  format="yyyy/MM/dd"
                  validationMessage="請輸入正確的時間格式"
                  onChange={handleDateChange}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}


interface Props {
  todos: any
  error: any
  date: any
}
// 待辦事項清單列表
class TodoList extends React.Component<any, any> {
  handleDateChange = (event) => {
    const date = event.value;
    this.setState({
      date: date,
    })
  }

  render() {
    return (
      <SimpleTable
        todos={this.props.todos}
        date={new Date()}
        handleDateChange={this.handleDateChange} />
    )
  }
}

// Connect時候需要轉譯的Store state props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error,
    date: state.date
  };
};

export default connect(mapStateToProps)(TodoList);

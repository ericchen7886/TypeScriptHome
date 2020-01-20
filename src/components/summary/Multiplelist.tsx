import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Style = require("./PaperList_style.module.css");

const PaperItem = (props) => {
  const { title, content, todoColor } = props;

  const backgroundColor = {
    backgroundColor: todoColor,
  };
  return (
    <Paper className={Style.title} style={backgroundColor}>
      <div className={Style.content} >
        <div className={Style.name}>
          {title}
        </div>
        <div className={Style.value}>
          {content}
        </div>
      </div>
    </Paper>
  )
}


export default class Multiplelist extends React.Component<any, any> {
  render() {

    const { todos } = this.props;
    const number = Math.floor(12 / todos.length)
    return (
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
          <Grid container={true} justify="center" spacing={5}>
            {this.props.todos.map((todo, idx) => (
              <Grid key={todo.id} item={true} xs={2}>
                <PaperItem title={todo.name} content={todo.money} todoColor={this.props.todoColor} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


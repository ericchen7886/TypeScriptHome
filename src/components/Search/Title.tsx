import React, { Component } from 'react';

import { connect } from 'react-redux';



interface Props {
  todos: any
}

// 待辦事項清單列表
class Title extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    console.log('init..................');
    console.log(this.props.todos)

  }

  // {this.props.isFetching ? '載入中' : this.props.todos.length}
  render() {
    return (
      <div>
        <div>
          <h1>
            用戶資料查詢
          </h1>
          <div>
            狀態 : {getErrorMsg(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

// Connect時候需要轉譯的Store state props

const getErrorMsg = props => {
  console.log('title', props.todos)
  if (!props.isFetching) {
    switch (props.error) {
      case 401:
        return '資料庫查無編號';
      case 404:
        return '資料庫查無編號';
      case 500:
        return '資料庫查無編號';
      case 200:
        if (!(props.todos.length > 0)) {
          return '資料庫查無編號';
        }
        return '目前查詢用戶數量: ' + props.todos.length;
      default:
        return 'Error';
    }
  } else {
    return '載入中';
  }

};

const mapStateToProps = state => {
  console.log('12345', state.todos)
  return {
    todos: state.todos,
    isFetching: state.isFetchingTodoList,
    error: state.error
  };

};

export default connect(mapStateToProps)(Title);

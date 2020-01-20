import React, { Component } from 'react';
import { connect } from 'react-redux';

interface Props {
  todos: any
  errorMsg: any
}

// 待辦事項清單列表
class VaildTitle extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    console.log('init..................123123123', this.props.errorMsg)
  }

  // {this.props.isFetching ? '載入中' : this.props.todos.length}
  render() {
    return (
      <div>
        <div>
          <h1>
            資料繳費系統
          </h1>
          <div>
            狀態 - <b>{getErrorMsg(this.props)}</b>
          </div>
        </div>
      </div>
    );
  }
}

// Connect時候需要轉譯的Store state props
const getErrorMsg = props => {

  if (!props.isFetching) {
    console.log('ErrorMsg......................', props.errorMsg)
    switch (props.errorMsg) {
      case 201:
        return '資料驗證失敗, 請重新編輯資料!!';
      case 200:
        return '資料驗證成功, 可以進行繳費.';
      default:
        return '資料庫查無編號';
    }
  } else {
    return '載入中';
  }

};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isFetching: state.isFetchingTodoList,
    error: state.error,
    errorMsg: state.errorMsg,
  };

};

export default connect(mapStateToProps)(VaildTitle);

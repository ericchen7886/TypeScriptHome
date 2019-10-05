import React, { Component } from 'react'
import MultiInputGrid from './MultiInput_Grid';
import { UIDisplay } from "./UIDisplay";
import { connect } from 'react-redux';
import { addEditTodo, fetchTodosSubmitServer, fetchTodosFromServer } from '../../actions';

interface StateType {
    todos: any,
    editId?: any,
}

interface GridData {
    id: number;
    name?: string;
    description?: string;
    money?: number;
    inEdit?: boolean;
    inAdd?: boolean;
}

class MultipInput extends Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            editId: '',
            isFetch: true,
            inAdd: false,
            inEdit: false,
            tempTodos: [],
        }
    }

    // 後端帶回資料後,加入更新狀態
    componentDidUpdate() {
        const { todos } = this.props;
        const { isFetch, tempTodos } = this.state;
        if (todos.length > 0 && isFetch) {
            console.log('componentDidUpdate...');
            todos.map((to) => {
                to.inEdit = false
                to.inAdd = false
            });
            this.setState({
                todos: todos,
                isFetch: false
            });
        }
    }

    itemChange = (e) => {
        const { todos } = this.state;
        const value = e.value;
        const name = e.field;
        if (!name) {
            return;
        }
        const updatedData = todos.slice();
        const item = updatedData[updatedData.indexOf(e.dataItem)];
        item[name] = value;
        this.setState({
            todos: updatedData

        });
        console.log('itemChange', todos);
    }

    handleCreateClick = () => {
        console.log('handleCreateClick..........')
        const { todos } = this.state;
        // todos.map((to) => {
        //     to.inEdit = false
        // });
        console.log(todos);
        const nextId = todos.length + 1;
        const dataItem: GridData[] = [{
            id: nextId,
            name: undefined,
            description: undefined,
            money: undefined,
            inAdd: true,
            inEdit: true
        }];
        const newData = todos.concat(dataItem);
        this.setState({ todos: newData, editId: nextId });
    }

    handleEditClick = (dataItem) => (event) => {
        console.log('handleEditClick..........')
        const { todos, tempTodos } = this.state;
        const index = dataItem.id - 1;
        console.log('index..........', index)
        console.log('tempTodos..........', Object.assign({}, todos[index]))
        this.setState({
            tempTodos: Object.assign({}, todos[index])
        });
        const data = todos.slice();
        data[index].inEdit = true;
        console.log('data..........', data)
        this.setState({ todos: data });
    }

    handelCancelClick = (dataItem) => (event) => {
        console.log('handelCancelClick..........')
        const { todos, tempTodos } = this.state;
        console.log('tempTodos..........', tempTodos)
        const index = dataItem.id - 1;
        console.log('index..........', index)
        const data = todos.slice();
        console.log('data..........', data)
        data[index] = tempTodos
        this.setState({
            tempTodos: [],
        })
        console.log('tempTodos2.............', tempTodos);
        this.setState({ todos: data });
    }

    handleSubmitClick = (props) => {
        const { todos } = this.state;
        console.log('submit.......', todos);
        this.props.fetchTodosSubmitServer(todos);
        this.props.fetchTodosFromServer();
    }

    render() {
        const { todos } = this.state;
        // const { editId } = this.state;
        const multiInputDisplay =
            <div>
                <MultiInputGrid
                    data={todos}
                    // handleRowClick={this.handleRowClick}
                    itemChange={this.itemChange}
                    handleCreateClick={this.handleCreateClick}
                    handleEditClick={this.handleEditClick}
                    handelCancelClick={this.handelCancelClick}
                    handleSubmitClick={this.handleSubmitClick}
                />
            </div>

        return (
            <UIDisplay
                title="多筆輸入顯示DEMO"
                content={multiInputDisplay}
            />
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addEditTodo: isEdit => {
            dispatch(addEditTodo(isEdit));
        },
        fetchTodosSubmitServer: (todos) => {
            dispatch(fetchTodosSubmitServer(todos));
        },
        fetchTodosFromServer: () => {
            dispatch(fetchTodosFromServer());
        }
    };
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        tempTodos: state.todos.slice(),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultipInput);
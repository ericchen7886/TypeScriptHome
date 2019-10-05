import React, { PureComponent } from 'react'
import Multiplelist from './Multiplelist'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { UIDisplay } from "../Multip/UIDisplay";

export default class Summaryhome extends React.Component<any, any> {
    constructor(props) {
        super(props);
        const todos = [
            { id: 1, item: '總件數', value: '10' },
            { id: 2, item: '總重量', value: '20' },
            { id: 3, item: '總材積重', value: '30' },
            { id: 4, item: '累計件數', value: '40' },
            { id: 5, item: '累計重量', value: '50' },
            { id: 6, item: '累計重量', value: '50' },
        ]

        const number = Math.floor(12 / todos.length)
        console.log('Summary number', number)
        this.state = {
            todos: todos,
            todoColor: '#FFAA33',
            todosNeedBlock: number,
        }
    }

    render() {
        const { todos, todoColor, todosNeedBlock } = this.state
        const summaryBox =
            <div>
                <Multiplelist
                    todos={todos}
                    todoColor={todoColor}
                    todosNeedBlock={todosNeedBlock}
                />
            </div>
        return (
            <UIDisplay
                title="Summary DEMO"
                content={summaryBox}
            />
        )
    }
}

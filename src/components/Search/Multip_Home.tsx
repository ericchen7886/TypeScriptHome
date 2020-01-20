import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Title from './Title';
import { connect } from 'react-redux';
import { UIDisplay } from "../Multip/UIDisplay";

class MultipHome extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    render() {
        const MultipBox =
            <div>
                <Title />
                <TodoForm />
                <TodoList date={this.state.date} />
            </div>
        return (
            <UIDisplay
                title="MultipInput DEMO"
                content={MultipBox}
            />
        )
    }
}

export default connect(null, null)(MultipHome);
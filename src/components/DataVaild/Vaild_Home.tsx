import React, { Component } from 'react';
import VaildTodoList from './VaildTodoList';
import VaildTodoForm from './VaildTodoForm';
import VaildTitle from './VaildTitle';
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
        const VaildBox =
            <div>
                <VaildTitle />
                <VaildTodoForm />
                <VaildTodoList date={this.state.date} />
            </div>
        return (
            <UIDisplay
                title="VaildData DEMO"
                content={VaildBox}
            />
        )
    }
}

export default connect(null, null)(MultipHome);
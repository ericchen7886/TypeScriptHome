import React, { PureComponent } from 'react'
import Multiplelist from './Multiplelist'
import { connect } from 'react-redux';
import { UIDisplay } from "../Multip/UIDisplay";

class Summaryhome extends React.Component<any, any> {
    render() {
        const summaryBox =
            <div>
                <Multiplelist
                    todos={this.props.todos}
                    todoColor={'#FFAA33'}
                />
            </div>
        return (
            <UIDisplay
                title="SummaryBox DEMO"
                content={summaryBox}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, null)(Summaryhome);

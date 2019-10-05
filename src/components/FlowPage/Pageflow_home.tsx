import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
const Style = require("./Pageflow_style.module.css");
import { UIDisplay } from "components/Multip/UIDisplay";
import PageflowGrids from "./Pageflow_grids";
import PageflowForm from "./Pageflow_form";
import PageflowDetail from "./Pageflow_detail";

export class PageflowHome extends Component<any> {
    readonly state = {
        nextId: 0,
        pageShow: "",
        detailOpen: false,
        editDataItem: {},
    }

    handleCreateClick = (maxId: number) => event => {

        this.setState({
            nextId: maxId + 1,
            pageShow: "create",
            editDataItem: {},
        })
    }

    handleEditClick = (dataItem) => event => {
        console.log('home handleEditClick');
        this.setState({
            pageShow: "edit",
            editDataItem: dataItem.dataItem,
        })
    }

    handleHomeChange = () => {
        console.log('home handleHomeChange');
        this.setState({
            pageShow: "",
            editDataItem: {},
        })
    }

    handleHomeClick = () => event => {
        console.log('home handleHomeClick');
        this.setState({
            pageShow: "",
            editDataItem: {},
        })
    }

    handleDetailOpen = (dataItem) => event => {
        console.log('home handleDetailOpen');
        this.setState({
            pageShow: "detail",
            editDataItem: dataItem.dataItem,
        })
    }

    render() {

        const { nextId, pageShow, detailOpen, editDataItem } = this.state;
        const { todos } = this.props
        // home display 判斷進入哪個模式
        let display =
            <PageflowGrids
                handleCreateClick={this.handleCreateClick}
                handleEditClick={this.handleEditClick}
                handleDetailOpen={this.handleDetailOpen}
                todos={todos}
            />;
        // paheshow display
        if (pageShow === "create") {
            display =
                <PageflowForm
                    // todos={todos}
                    nextId={nextId}
                    pageShow={pageShow}
                    editDataItem={editDataItem}
                    handleHomeClick={this.handleHomeClick}
                    handleHomeChange={this.handleHomeChange}
                />;
        } else if (pageShow === "edit") {
            display =
                <PageflowForm
                    pageShow={pageShow}
                    editDataItem={editDataItem}
                    handleHomeClick={this.handleHomeClick}
                    handleHomeChange={this.handleHomeChange}
                />;
        } else if (pageShow === "detail") {
            display =
                <PageflowDetail
                    editDataItem={editDataItem}
                    handleHomeClick={this.handleHomeClick}
                />;
        }

        return (
            <div>
                <UIDisplay
                    title="Eric頁面流測試"
                    content={
                        display
                    }
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    const actions = {
    }

    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageflowHome);

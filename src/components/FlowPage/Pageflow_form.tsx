import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchTodosFromServer, fetchTodosAddEditSubmitServer } from '../../actions/index'
// css
const Style = require("./Pageflow_style.module.css");
// shared component
import {
    StyledGrid,
    StyledTitleGridBorder,
    StyledGridBorder,
    GridProportion,
} from './StyledGrid';
import Taskbar from './Taskbar';
import { Title } from './Title.jsx';
// material

// kendo component
import { Input } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';


const InputForm = (props) => {

    const { form, id, name, money, description,
        handleNameChange, handlemoneyChange, handledescriptionChange } = props;

    return (
        <form ref={form} >
            <StyledGrid
                container={true}
            >
                <StyledTitleGridBorder
                    item={true}
                    sm={GridProportion.sm.titlecols}
                    xs={GridProportion.xs.titlecols}
                >
                    <p>代碼</p>
                </StyledTitleGridBorder>
                <StyledGridBorder
                    item={true}
                    sm={GridProportion.sm.contentcols}
                    xs={GridProportion.xs.contentcols}
                >
                    <Input className={Style.input}
                        type='text'
                        value={id}
                        disabled={true}
                    />
                </StyledGridBorder>

                <StyledTitleGridBorder
                    item={true}
                    sm={GridProportion.sm.titlecols}
                    xs={GridProportion.xs.titlecols}
                >
                    <p>
                        <span style={{ color: "red" }}>*</span>
                        名字
                    </p>
                </StyledTitleGridBorder>
                <StyledGridBorder
                    item={true}
                    sm={GridProportion.sm.contentcols}
                    xs={GridProportion.xs.contentcols}
                >
                    <Input className={Style.input}
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                        maxLength={10}
                        required={true}
                        validationMessage="此為必填，請輸入不超過10字元的內容"
                    />
                </StyledGridBorder>

                <StyledTitleGridBorder
                    item={true}
                    sm={GridProportion.sm.titlecols}
                    xs={GridProportion.xs.titlecols}
                >
                    <p>
                        <span style={{ color: "red" }}>*</span>
                        金額
                    </p>
                </StyledTitleGridBorder>
                <StyledGridBorder
                    item={true}
                    sm={GridProportion.sm.contentcols}
                    xs={GridProportion.xs.contentcols}
                >
                    <Input className={Style.input}
                        type='text'
                        value={money}
                        onChange={handlemoneyChange}
                        maxLength={10}
                        required={true}
                        validationMessage="此為必填，請輸入不超過10金額"
                    />
                    {/* <DropDownList
                        data={["魏", "蜀", "吳"]}
                        value={money}
                        onChange={handlemoneyChange}
                        required={true}
                        validationMessage="此為必選，請選擇一個選項"
                    /> */}
                </StyledGridBorder>

                <StyledTitleGridBorder
                    item={true}
                    sm={GridProportion.sm.titlecols}
                    xs={GridProportion.xs.titlecols}
                >
                    <p>
                        <span style={{ color: "red" }}>*</span>
                        描述
                    </p>
                </StyledTitleGridBorder>
                <StyledGridBorder
                    item={true}
                    sm={GridProportion.sm.contentcols}
                    xs={GridProportion.xs.contentcols}
                >
                    <Input className={Style.input}
                        type='text'
                        value={description}
                        onChange={handledescriptionChange}
                        maxLength={20}
                        required={true}
                        validationMessage="此為必填，請輸入不超過20字元的內容"
                    />
                </StyledGridBorder>

                <StyledGridBorder
                    item={true}
                    sm={GridProportion.sm.contentcols}
                    xs={GridProportion.xs.contentcols}
                >
                    <Input className={Style.input}
                        type='text'
                        value={description}
                        onChange={handledescriptionChange}
                        maxLength={20}
                        required={true}
                        validationMessage="此為必填，請輸入不超過20字元的內容"
                    />
                </StyledGridBorder>

            </StyledGrid>
        </form>
    )
}

export class PageflowForm extends Component<any> {

    readonly state = {
        id: this.props.editDataItem.id || this.props.nextId,
        name: this.props.editDataItem.name || "",
        money: this.props.editDataItem.money || "",
        description: this.props.editDataItem.description || "",
    }

    // 定位表單
    form = React.createRef<HTMLFormElement>();

    public handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value,
        });
    }

    public handlemoneyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            money: event.target.value,
        });
    }

    // public handlemoneyChange = (event: DropDownListChangeEvent) => {
    //     this.setState({
    //         money: event.target.value,
    //     });
    // }

    public handledescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            description: event.target.value,
        });
    }

    /**
     * Usage: 儲存處理函式，先檢查表單的資料合法性再送出表單
     * Param: none
     * As Callback: <Taskbar />
     */
    public handleFormSubmit = () => (event) => {
        const { id, name, money, description } = this.state;
        const data: any = [{
            id: id,
            name: name,
            money: money,
            description: description
        }];

        console.log('handleFormSubmit................', data)
        // usbmit規則
        this.props.fetchTodosAddEditSubmitServer(data);
        this.props.fetchTodosFromServer();
        this.props.handleHomeChange();
        location.reload();
    }

    render() {

        const { pageShow, handleHomeClick } = this.props;
        const { id, name, money, description } = this.state;

        let titleName = "範例新增";
        if (pageShow === "edit") {
            titleName = "範例編輯";
        }

        return (
            <div>
                <Taskbar
                    className={Style.taskbararea}
                    data={[
                        { name: '返回', onClick: handleHomeClick() },
                        { name: '儲存', onClick: this.handleFormSubmit() },
                    ]}
                />

                <Title title={titleName} />

                <InputForm
                    form={this.form}

                    id={id}
                    name={name}
                    money={money}
                    description={description}

                    handleNameChange={this.handleNameChange}
                    handlemoneyChange={this.handlemoneyChange}
                    handledescriptionChange={this.handledescriptionChange}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
    return {
        fetchTodosAddEditSubmitServer: (todos) => {
            dispatch(fetchTodosAddEditSubmitServer(todos));
        },
        fetchTodosFromServer: () => {
            dispatch(fetchTodosFromServer());
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageflowForm);

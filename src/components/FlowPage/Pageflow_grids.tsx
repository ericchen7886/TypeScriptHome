import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// css
const Style = require("./Pageflow_style.module.css");
// type
import { fetchTodosDeleteSubmitServer, fetchTodosAddEditSubmitServer, fetchTodosFromServer } from '../../actions/index'
// shared component
import { Title } from './Title';
import DeleteConfirm from './DeleteConfirm';
import {
    StyledAreaFuctionButton
} from './StyledButton';
// material component
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
// kendo component
import { Grid, GridColumn, GridToolbar, GridCellProps, GridPageChangeEvent, GridRowClickEvent } from '@progress/kendo-react-grid';

const GridsDisplay = (props) => {

    const {
        // props
        todos,
        handleCreateClick, handleEditClick, handleDetailOpen,
        // state
        skip, take, anchorEl, selectDataItem,
        // this
        handlePageChange, handleClick, handleClose, handleCheckBoxClick, handleCheckBoxAllClick,
        handleDeleteClick, handleMultiDeleteClick,
    } = props;
    const gridRangeData = todos.slice(skip, take + skip);
    const maxId = Math.max(...todos.slice().map(item => Object.values(item)[0]));

    return (
        <Grid
            style={{ fontWeight: 100 }}
            data={gridRangeData}
            skip={skip}
            take={take}
            total={todos.length}
            pageable={{
                buttonCount: 5,
                info: true,
                type: 'numeric',
                pageSizes: true,
                previousNext: true,
            }}
            onPageChange={handlePageChange}
            sortable={true}
            resizable={true}
            pageSize={skip}
            scrollable='scrollable'
            headerCellRender={(defaultRendering, propss) => (
                <div
                    style={{ fontSize: "1rem" }}
                >{defaultRendering}</div>
            )}
        >
            <GridToolbar>
                <div className={Style.listitem}>
                    <Title title="範例清單" />
                    <StyledAreaFuctionButton
                        onClick={handleCreateClick(maxId)}
                    >新增</StyledAreaFuctionButton>
                    <StyledAreaFuctionButton
                        onClick={handleMultiDeleteClick()}
                    >多筆刪除</StyledAreaFuctionButton>
                    <StyledAreaFuctionButton
                        aria-owns={anchorEl ? 'render-props-popover' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick()}
                    >下載</StyledAreaFuctionButton>
                    <Menu
                        id="render-props-popover"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        disableAutoFocus={true}
                        disableAutoFocusItem={true}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        getContentAnchorEl={null}
                    >
                        <MenuItem
                            onClick={handleClose}
                        >Excel</MenuItem>
                        <MenuItem
                            onClick={handleClose}
                        >PDF</MenuItem>
                        <MenuItem
                            onClick={handleClose}
                        >CSV</MenuItem>
                    </Menu>
                </div>
            </GridToolbar>
            <GridColumn
                width='64px'
                cell={(dataItem) => {
                    const selectedItem = selectDataItem.map(item => Object.values(item)[0]);
                    const checkOrNot = selectedItem.indexOf(dataItem.dataItem.id) !== -1;
                    return (
                        <td>
                            <Checkbox
                                style={{
                                    padding: "0px",
                                }}
                                checked={checkOrNot}
                                onChange={handleCheckBoxClick(dataItem)}
                            />
                        </td>
                    )
                }}
                headerCell={() => {
                    console.log('gridRangeData', gridRangeData)
                    let checkOrNot = true;
                    gridRangeData.map((dataItem) => {
                        const selected = selectDataItem.filter(function f(el) {
                            return el.id === dataItem.id;
                        });
                        console.log('selected', selected)
                        if (selected.length === 0) {
                            checkOrNot = false;
                        }
                    })

                    return (
                        <div style={{ padding: '0', borderBottom: '0' }}>
                            {/* <input type='checkbox'
                                checked={checkOrNot}
                                onChange={handleCheckBoxAllClick(gridRangeData)}
                            /> */}
                            <Checkbox
                                style={{
                                    padding: "0px",
                                }}
                                checked={checkOrNot}
                                onChange={handleCheckBoxAllClick(gridRangeData)}
                            />
                        </div>
                    )
                }}
            />
            <GridColumn width="250px" title="操作功能"
                cell={(dataItem) => {
                    return (
                        <td>
                            <StyledAreaFuctionButton
                                onClick={handleDetailOpen(dataItem)}
                            >明細</StyledAreaFuctionButton>
                            <StyledAreaFuctionButton
                                onClick={handleEditClick(dataItem)}
                            >編輯</StyledAreaFuctionButton>
                            <StyledAreaFuctionButton
                                onClick={handleDeleteClick(dataItem)}
                            >刪除</StyledAreaFuctionButton>
                        </td>
                    )
                }}
            />
            <GridColumn width='100px' field="id" title="代碼" />
            <GridColumn width='160px' field="name" title="名字" />
            <GridColumn width="100px" field="money" title="金額" />
            <GridColumn width="160px" field="description" title="說明" />
            <GridColumn field="last" title=" " />

        </Grid>
    )
}

export class PageflowGrids extends Component<any> {
    // constructor(props){
    //     super(props)
    //     this.state={
    //                 skip: 0,
    //     take: 10,
    //     anchorEl: null,
    //     // 狀態
    //     deleteConfirmOpen: false,
    //     multiDeleteConfirmOpen: false,
    //     // 編輯
    //     editDataItem: {},
    //     editDataId: 0,
    //     editDataBatchId: '',
    //     // 選擇
    //     selectDataItem: [],
    //     }
    // }
    readonly state = {
        // 顯示比數
        skip: 0,
        take: 10,
        anchorEl: null,
        // 狀態
        deleteConfirmOpen: false,
        multiDeleteConfirmOpen: false,
        // 編輯
        editDataItem: {},
        editDataId: 0,
        editDataBatchId: '',
        // 選擇
        selectDataItem: [],
    }

    /**
     * Usage: grid顯示區間改變
     * Param: event
     * As Callback: 
     */
    handlePageChange = (event: GridPageChangeEvent) => {
        console.log('handlePageChange.............')
        this.setState({
            skip: event.page.skip,
            take: event.page.take,
        });
    }

    /**
     * Usage: 設定menu元件render定位點
     * Param: event
     * As Callback: 
     */
    handleClick = () => (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log('handleClick anchorEl.............')
        this.setState({ anchorEl: event.currentTarget });
    }

    /**
     * Usage: 清除menu元件render定位點
     * Param: event
     * As Callback: 
     */
    handleClose = () => {
        console.log('handleClose anchorEl.............')
        this.setState({ anchorEl: null });
    }

    /**
     * Usage: 全選點擊處理 比對已選擇的資料進行新增或刪除
     * Param: 
     *      data: Grid顯示的所有資料
     *      event
     * As Callback: <ListShow />
     */
    public handleCheckBoxAllClick = (data: any[]) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleCheckBoxAllClick.............')
        const selectedData = this.state.selectDataItem.map(item => Object.values(item)[0]);
        let newSelectedData = this.state.selectDataItem;

        // console.log("Pageflow_grids handleCheckBoxAllClick");
        console.log("selectDataItem", this.state.selectDataItem);
        console.log("selectedData", selectedData);
        console.log("newSelectedData", newSelectedData);
        console.log("checked", event.currentTarget.checked);

        if (event.currentTarget.checked) {

            data.map((dataItem) => {
                const matchData = selectedData.indexOf(dataItem.id);
                if (matchData === -1) {
                    selectedData.push(dataItem.id);
                    newSelectedData = newSelectedData.concat(dataItem);
                }
            });
            let newdata = ''
            const dataLength = selectedData.length;
            for (let i = 0; i < dataLength; i++) {
                newdata = newdata + selectedData[i] + ','
            }
            console.log('1. dataItem.id', newdata)
            this.setState({
                editDataBatchId: newdata
            });
        } else {

            data.map((dataItem) => {
                console.log('2. dataItem.id', dataItem.id)
                const matchData = selectedData.indexOf(dataItem.id);
                if (matchData !== -1) {
                    selectedData.splice(matchData, 1);
                    newSelectedData.splice(matchData, 1);
                }
            });
        }
        this.setState({
            selectDataItem: newSelectedData
        });
    }

    /**
     * Usage: 複選框點擊處理 比對已選擇的資料進行新增或刪除
     * Param: 
     *      dataItem: Grid被選擇的 row的資料
     *      event
     * As Callback: <ListShow />
     */
    public handleCheckBoxClick = (dataItem: React.PropsWithChildren<GridCellProps>) => (event: React.ChangeEvent<HTMLInputElement>) => {

        const clickedData = dataItem.dataItem;
        const selectedData = this.state.selectDataItem.map(item => Object.values(item)[0]);
        const matchData = selectedData.indexOf(clickedData.id);

        console.log("handleCheckBoxClick....one...........");
        console.log("selectDataItem", this.state.selectDataItem);
        console.log("clickedData", clickedData);
        console.log("selectedData", selectedData);
        console.log("matchData", matchData);

        let newSelectedData: any = [];
        if (matchData === -1) {
            newSelectedData = this.state.selectDataItem.concat(clickedData);
            // console.log('newSelectedData', newSelectedData)
            this.setState({
                selectDataItem: newSelectedData,
            })
        } else {
            newSelectedData = this.state.selectDataItem.slice();
            newSelectedData.splice(matchData, 1);
            // console.log('newSelectedData', newSelectedData)
            this.setState({
                selectDataItem: newSelectedData
            });
        }
        // console.log('newSelectedData', newSelectedData)
        const dataLength = newSelectedData.length;

        let stridx = '';
        for (let i = 0; i < dataLength; i++) {
            stridx = stridx + newSelectedData[i].id + ','
        }
        this.setState({
            editDataBatchId: stridx
        });
        console.log('newSelectedDataidx...', stridx)

    }

    /**
     * 單筆刪除點擊，顯示單筆刪除確認頁面與設定刪除項目至editDataItem
     */
    handleDeleteClick = (dataItem) => event => {
        console.log('111111111handleDeleteClick...', dataItem.dataItem.id);
        // editDataId
        this.setState({
            deleteConfirmOpen: true,
            editDataItem: dataItem.dataItem,
            editDataId: dataItem.dataItem.id,
        });
    }

    /**
     * 關閉單筆刪除確認頁面
     */
    handleDeleteConfirmOpenClose = () => {
        console.log('handleDeleteConfirmOpenClose...');
        this.setState({
            deleteConfirmOpen: false,
        });
    }

    /**
     * 執行單筆刪除，將editDataItem清空，關閉單筆刪除確認頁面
     */
    deleteSingleData = () => {
        const { editDataId } = this.state
        console.log('11deleteSingleData...', editDataId);
        // 單筆OK
        this.props.fetchTodosDeleteSubmitServer(editDataId);
        this.setState({ editDataItem: {} });
        this.props.fetchTodosFromServer();
        location.reload();
        this.handleDeleteConfirmOpenClose();
    }



    handleMultiDeleteClick = () => event => {
        console.log('handleMultiDeleteClick...');
        this.setState({
            multiDeleteConfirmOpen: true,
        });
    }

    handleMultiDeleteConfirmOpenClose = () => {
        console.log('handleMultiDeleteConfirmOpenClose...');
        this.setState({
            multiDeleteConfirmOpen: false,
        });
    }

    deleteMultiData = () => {
        const { editDataBatchId } = this.state;
        // console.log('deleteMultiData...', selectDataItem);
        console.log('111111111111aaa', editDataBatchId)
        // 多筆OK
        this.props.fetchTodosDeleteSubmitServer(editDataBatchId);
        this.setState({
            selectDataItem: [],
            editDataBatchId: '',
            skip: 0,
            take: 10,
        });
        this.props.fetchTodosFromServer();
        location.reload();

        this.handleMultiDeleteConfirmOpenClose();
    }



    render() {

        const { todos,
            handleCreateClick, handleEditClick, handleDetailOpen } = this.props;
        const { skip, take, anchorEl, selectDataItem,
            deleteConfirmOpen, multiDeleteConfirmOpen } = this.state;

        let deleteConfirm = <div></div>;
        if (deleteConfirmOpen) {
            deleteConfirm =
                <DeleteConfirm
                    handleOpenChange={this.handleDeleteConfirmOpenClose}
                    handleConfirmClick={this.deleteSingleData}
                />
        }

        let multiDeleteConfirm = <div></div>;
        if (multiDeleteConfirmOpen) {
            multiDeleteConfirm =
                <DeleteConfirm
                    handleOpenChange={this.handleMultiDeleteConfirmOpenClose}
                    handleConfirmClick={this.deleteMultiData}
                />
        }

        return (
            <div>
                <GridsDisplay
                    // props
                    todos={todos}
                    handleCreateClick={handleCreateClick}
                    handleEditClick={handleEditClick}
                    handleDetailOpen={handleDetailOpen}
                    // state
                    skip={skip}
                    take={take}
                    anchorEl={anchorEl}
                    selectDataItem={selectDataItem}
                    // this
                    handlePageChange={this.handlePageChange}
                    handleClick={this.handleClick}
                    handleClose={this.handleClose}
                    handleCheckBoxClick={this.handleCheckBoxClick}
                    handleCheckBoxAllClick={this.handleCheckBoxAllClick}
                    handleDeleteClick={this.handleDeleteClick}
                    handleMultiDeleteClick={this.handleMultiDeleteClick}
                />
                {deleteConfirm}
                {multiDeleteConfirm}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchTodosDeleteSubmitServer: (id) => {
            dispatch(fetchTodosDeleteSubmitServer(id));
        },
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
)(PageflowGrids);
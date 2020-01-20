import React from 'react';

import Button from '@material-ui/core/Button';

import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';


export const MultiInputGrid: React.FC<any> = (props) => {

    const {
        data,
        handleRowClick,
        itemChange,
        handleCreateClick,
        handleEditClick,
        handelCancelClick,
        handleSubmitClick,
        handleReloadClick
    } = props;


    return (
        <Grid
            data={data}
            editField="inEdit"
            scrollable='scrollable'
            resizable={true}
            onRowClick={handleRowClick}
            onItemChange={itemChange}
        >
            <GridToolbar>
                <Button
                    color="primary"
                    variant="outlined"
                    title="Add new"
                    onClick={handleCreateClick}

                >新增
                </Button>

                {/* {data.filter(p => p.inEdit).length > 0 && ( */}
                <Button
                    color="secondary"
                    variant="outlined"
                    title="Cancel current changes"
                    onClick={handleSubmitClick}
                >送出表單
                    </Button>
                {/* )} */}
                <Button
                    color="primary"
                    variant="contained"
                    title="current Search"
                    onClick={handleReloadClick}
                >表單刷新/查詢
                    </Button>
            </GridToolbar>
            <Column field="id" title="Id" width="80px" editable={false} />
            <Column field="name" title="Name" />
            <Column field="description" title="Descript" />
            <Column field="money" title="Money" width="150px" editor="numeric" />
            <Column width="180px"
                cell={(prop) => {

                    const dataItem = prop.dataItem;
                    const buttonValue = dataItem.inEdit ? '取消' : '編輯'
                    const buttonClick =
                        dataItem.inEdit ? handelCancelClick(dataItem) : handleEditClick(dataItem)

                    return (
                        <td>
                            <Button onClick={buttonClick}>
                                {buttonValue}
                            </Button>
                        </td>
                    )
                }}
            />
        </Grid>
    )
}
export default MultiInputGrid;
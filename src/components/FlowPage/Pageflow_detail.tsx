import React, { Component } from 'react';
// css
const Style = require("./Pageflow_style.module.css");
// shared component
import Taskbar from './Taskbar';
import { Title } from './Title.jsx';
import {
    StyledGrid,
    StyledTitleGridBorder,
    StyledGridBorder,
    GridProportion,
} from './StyledGrid';

export class PageflowDetail extends Component<any> {

    render() {

        const { editDataItem, handleHomeClick } = this.props;

        return (
            <div>
                <Taskbar
                    className={Style.taskbararea}
                    data={[
                        { name: '返回', onClick: handleHomeClick() },
                    ]}
                />

                <Title title="範例明細" />
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
                        <p>{editDataItem.id}</p>
                    </StyledGridBorder>

                    <StyledTitleGridBorder
                        item={true}
                        sm={GridProportion.sm.titlecols}
                        xs={GridProportion.xs.titlecols}
                    >
                        <p>名字</p>
                    </StyledTitleGridBorder>
                    <StyledGridBorder
                        item={true}
                        sm={GridProportion.sm.contentcols}
                        xs={GridProportion.xs.contentcols}
                    >
                        <p>{editDataItem.name}</p>
                    </StyledGridBorder>

                    <StyledTitleGridBorder
                        item={true}
                        sm={GridProportion.sm.titlecols}
                        xs={GridProportion.xs.titlecols}
                    >
                        <p>金額</p>
                    </StyledTitleGridBorder>
                    <StyledGridBorder
                        item={true}
                        sm={GridProportion.sm.contentcols}
                        xs={GridProportion.xs.contentcols}
                    >
                        <p>{editDataItem.money}</p>
                    </StyledGridBorder>

                    <StyledTitleGridBorder
                        item={true}
                        sm={GridProportion.sm.titlecols}
                        xs={GridProportion.xs.titlecols}
                    >
                        <p>描述</p>
                    </StyledTitleGridBorder>
                    <StyledGridBorder
                        item={true}
                        sm={GridProportion.sm.contentcols}
                        xs={GridProportion.xs.contentcols}
                    >
                        <p>{editDataItem.description}</p>
                    </StyledGridBorder>

                </StyledGrid>
            </div>
        )
    }
}

export default PageflowDetail

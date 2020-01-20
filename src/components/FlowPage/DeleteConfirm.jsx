/*
    Author: SY
    Date: 2019/03/08
    Usage:
    Parent:
    Childern: none
*/

// react
import React from "react";
// react route

// redux

// selector
// css less sass
import Style from "./deleteconfirm_style.module.css";
// shared component
import { PopupTitle } from "./Title";
// material component
import Popover from "@material-ui/core/Popover";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// kendo component

// presentational components

// container component

// other

const StyledPopover = withStyles({
    paper: {
        width: "300px",
        maxWidth: "none"
    }
})(Popover);

const StyledConfirmButton = withStyles({
    root: {
        fontSize: "0.875rem",
        width: "64px",
        background: "-webkit-linear-gradient(top, #f4ece1, #ddd1bb)",
        border: "1px solid #ddd1bb",
        "&:hover": {
            border: "1px solid #b52912",
            background: "#b52912",
            color: "#ddd1bb"
        }
    }
})(Button);

const StyledCancelButton = withStyles({
    root: {
        fontSize: "0.875rem",
        width: "64px",
        backgroundColor: "#fff",
        color: "#444",
        border: "1px solid transparent",
        borderColor: "#ccc",
        borderRadius: "3px",
        "&:hover": {
            border: "1px solid gray",
            background: "white"
        }
    }
})(Button);

const PopupEditTitle = props => {
    return (
        <div className={Style.listitem}>
            <PopupTitle title="提示訊息" />
            <IconButton style={{ position: "absolute", right: "12px", top: "0px" }} onClick={props.handleOpenChange}>
                <CloseIcon />
            </IconButton>
        </div>
    );
};

/*
    Usage: Get State from Redux
    Store:
    Process: 
*/
const DeleteConfirm = props => {
    return (
        <StyledPopover
            open={true}
            style={{
                zIndex: 100,
                background: "rgba(0, 0, 0, 0.4)"
            }}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "center",
                horizontal: "center"
            }}
        >
            <PopupEditTitle handleOpenChange={props.handleOpenChange} />

            <div className={Style.popup_content}>
                <p className={Style.text}>是否確認刪除</p>

                <div className={Style.function_button_area}>
                    <StyledConfirmButton onClick={props.handleConfirmClick}>確認</StyledConfirmButton>
                    <div style={{ width: "15px" }} />
                    <StyledCancelButton onClick={props.handleOpenChange}>取消</StyledCancelButton>
                </div>
            </div>
        </StyledPopover>
    );
};

export default DeleteConfirm;

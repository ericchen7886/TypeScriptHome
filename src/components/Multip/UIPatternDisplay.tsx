import React from 'react'
// css
const Style = require("./UIPatternDisplay_style.module.css");
// types
import { UIPatternDisplayProps } from "./ui_pattern_display";
// material
import Paper from "@material-ui/core/Paper";

export const UIPatternDisplay: React.FC<UIPatternDisplayProps> = (props) => {

    const { title, content } = props;

    return (
        <div className={Style.root}>
            <Paper className={Style.title}>
                {title}
            </Paper>
            <Paper className={Style.content}>
                {content}
            </Paper>
        </div>
    )
}

export default UIPatternDisplay;

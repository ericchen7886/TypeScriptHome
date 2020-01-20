
// react
import * as React from 'react';
// react router
// redux
// selector
// axios
// css、less、sass
const Style = require('./taskbar_style.module.css');
// shared component
// material component
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { number } from 'prop-types';
// kendo component
// other
// presentational component
// container component

const StyledToolbarButton = withStyles({
    root: {
        borderRadius: '0px',
        background: '-webkit-linear-gradient(top, #f4ece1, #ddd1bb)',
        border: '1px solid #ddd1bb',
        fontFamily: "Helvetica, Arial, '微軟正黑體', sans-serif",
        '&:hover': {
            border: '1px solid #b52912',
            background: '#b52912',
            color: '#ddd1bb',
        },
    }
})(Button);

/* props {
        scrolledHeight 是否置頂的判斷變數
        data {
            name: 按鈕名
            onClick: onClick event handler
        }
    }   
*/
class Taskbar extends React.Component<any, any> {

    public static defaultProps = {
        style: {},
        className: '',
        data: [],
        buttonStatus: "",
    }

    public readonly state = {
        scrolledHeight: 0,
    }

    constructor(props) {
        super(props);
        this.handleWindowOnScroll = this.handleWindowOnScroll.bind(this);
    }

    /*
    Usage: 監聽視窗捲動事件
    Param: none
    As Callback: none
    */
    public componentDidMount() {
        window.addEventListener('scroll', this.handleWindowOnScroll);
    };

    public componentDidUpdate() {
        // console.log("taskbar update");
    }

    /*
    Usage: 移除視窗捲動事件
    Param: none
    As Callback: none
    */
    public componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowOnScroll);
    };

    /*
    Usage: 抓取頁面捲動高度，判斷是否要置頂
    Param: none
    As Callback: none
    */
    public handleWindowOnScroll() {
        window.onscroll = () => {

            const h = window.pageYOffset;

            if (this.state.scrolledHeight < 160 && h > 160) {
                // console.log(this.state.scrolledHeight);
                // console.log(h);
                this.setState({ scrolledHeight: h });
            }
            if (this.state.scrolledHeight > 160 && h < 160) {
                // console.log(this.state.scrolledHeight);
                // console.log(h);
                this.setState({ scrolledHeight: h });
            }
        }
    }

    public render() {

        return (
            <div
                style={this.props.style}
                className={
                    this.state.scrolledHeight > 160 ? Style.taskbar_fixed : Style.taskbar
                        + " " + this.props.className
                }
            >
                {this.props.data.map((props) => {
                    return (
                        <StyledToolbarButton
                            key={props.name}
                            onClick={props.onClick}
                            disabled={props.buttonStatus === "R"}
                            style={props.buttonStatus === "N" ?
                                { display: "none" }
                                : {}
                            }
                        >{props.name}</StyledToolbarButton>
                    )
                })}
            </div>
        )
    }
}

export default Taskbar;
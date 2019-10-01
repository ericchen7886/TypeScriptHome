
// // react
// import * as React from 'react';
// import { Suspense } from 'react';
// // react router
// import { Switch, Route } from "react-router-dom";
// import { RouteComponentProps } from 'react-router-dom';
// // redux
// import { connect } from 'react-redux';
// import {
//     setApplicationCodeListData,
//     setDepartmentCodeListData,
// } from 'reducers/BAS/sharedata/action';
// import {
//     setUserMenuData,
//     setUserComponentTaskData,
//     setJwtData,
//     setUserLastLoginTimeData,
// } from 'reducers/Login/action';
// import {
//     setUserMenuLayoutData,
//     setUserUsingTaskData,
//     setSidebarlistItem,
// } from 'reducers/Layout/action';
// import { bindActionCreators, Dispatch } from 'redux';
// // selector
// import {
//     getApplicationCodeListData
// } from 'reducers/BAS/sharedata/selector';
// import {
//     getJwtData,
//     getUserid,
//     getUserMenuData,
// } from 'reducers/Login/selector';
// import {
//     getUserUsingTaskData,
// } from 'reducers/Layout/selector';
// // axios
// import Axios from 'axios';
// // css、less、sass
// const TwmsMaterialStyle = require('./TwmsMaterialStyle.module.css');
// // shared component
// import {
//     TaskPermissionCheck
// } from 'component/utility/TaskPermissionCheck';
// // material component
// import Hidden from '@material-ui/core/Hidden';
// // kendo component
// // presentational component
// // container component
// import TitleandTool from './TitleandTool';
// import MenuShow from './MenuShow';
// import SidebarList from './SidebarList';
// // other
// import twmsMenuRoutes from '../routes/twmsMenuRoutes';
// import twmsToolbarRoutes from '../routes/twmsToolbarRoutes';


// /*
//     Usage: 功能頁的Route設定
// */
// let key = 0;
// const switchRoutesItem = (props) => {
//     return (
//         props.map((prop) => {
//             key++
//             return (
//                 (!!prop.children) ?
//                     switchRoutesItem(prop.children)
//                     : <Route path={prop.path} component={prop.component} key={key} />
//             )
//         })
//     )
// }

// /*
//     Usage: 功能頁的畫面顯示
// */
// const switchRoutes = () => {

//     return (
//         <Suspense fallback={<div>載入中...</div>}>
//             <Switch>
//                 {switchRoutesItem(twmsMenuRoutes)}
//                 {switchRoutesItem(twmsToolbarRoutes)}
//             </Switch>
//         </Suspense>
//     )
// }

// /*
//     Usage: 畫面顯示的總控管
// */
// interface TwmsMaterialProps extends RouteComponentProps {
//     jwtData: string;
//     userid: string;
//     isLogging: boolean;
//     userMenu: any;
//     userUsingTaskId: any;
//     applicationCodeList: any;
//     actions;

//     userMenuSortChangeFlag: any;
// }

// interface TwmsMaterialState {
//     height: number;
//     width: string;

//     sidebarItemOnClick: any;

//     pwNeedChange: boolean;
//     daysBeforeInterval: number;
//     titleandtoolShow: boolean;
//     errorReason: string;
//     errorHappen: string;
// }

// class TwmsMaterial extends React.Component<TwmsMaterialProps, TwmsMaterialState> {

//     public readonly state: TwmsMaterialState = {
//         height: 0,
//         width: '0',
//         sidebarItemOnClick: '',
//         pwNeedChange: false,
//         daysBeforeInterval: -1,
//         titleandtoolShow: false,
//         errorReason: "",
//         errorHappen: "",
//     }

//     public componentWillMount() {

//         console.log("twmsMaterial WillMount");
//         // const tkey = window.sessionStorage.getItem("jwt");
//         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
//         // console.log(tkey);

//         // if(tkey) {
//         //     console.log("set jwt");
//         //     this.props.actions.setJwtData(tkey);
//         // }
//     }

//     public componentDidMount() {
//         console.log("twmsMaterial DidMount");

//         this.setState({
//             height: window.innerHeight,
//             width: 'calc(100% - 200px)',
//             // width: '100%',
//         });
//     }

//     public componentDidUpdate() {

//         // console.log(this.props.history);
//         if(this.props.location.pathname === "/sample") {
//             this.props.history.push("/sample/homepage");
//         }
//     }

//     /*
//         Usage: 隨Sidebarlist的開啟狀態調整功能畫面的寬度
//         Param: Sidebarlist的開啟狀態
//     */
//     public handleWidthChange = (isOpen: boolean) => {
//         isOpen ?
//             this.setState({ width: 'calc(100% - 200px)' }) :
//             this.setState({ width: '100%' })
//     }

//     public handleItemClick = (sidebarId, sidebarName) => event => {

//         window.sessionStorage.setItem("userUsingTask", sidebarId);
//         this.props.actions.setUserUsingTaskData(sidebarId);
//     }

//     public render() {
//         const { handleWidthChange } = this;
//         const { width } = this.state;

//         return (
//             <div>

//                 <div>
//                     <TitleandTool
//                         pwNeedChange={this.state.pwNeedChange}
//                         daysBeforeInterval={this.state.daysBeforeInterval}
//                     />
//                     <MenuShow
//                         sidebarItemOnClick={this.props.userUsingTaskId}
//                         handleItemClick={this.handleItemClick}
//                     />
//                     <SidebarList
//                         sidebarItemOnClick={this.props.userUsingTaskId}
//                         handleWidthChange={handleWidthChange}
//                         handleItemClick={this.handleItemClick}
//                     />
//                     <Hidden smDown={true}>
//                         <div className={TwmsMaterialStyle.rightContent} style={{ width: width }}>
//                             <div className={TwmsMaterialStyle.rightContentDisplay}>
//                                 {switchRoutes()}
//                             </div>
//                         </div>
//                     </Hidden>
//                     <Hidden smUp={true}>
//                         <div className={TwmsMaterialStyle.rightContentMobile}>
//                             <div className={TwmsMaterialStyle.rightContentDisplay}>
//                                 {switchRoutes()}
//                             </div>
//                         </div>
//                     </Hidden>
//                 </div>
//             </div>
//         );
//     };
// };

// const mapStateToProps = state => ({
//     jwtData: getJwtData(state),
//     userid: getUserid(state),
//     userMenu: getUserMenuData(state),
//     userUsingTaskId: getUserUsingTaskData(state),
//     applicationCodeList: getApplicationCodeListData(state),

// });

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     const actions = {
//         // bas sharedata
//         setApplicationCodeListData,
//         setDepartmentCodeListData,
//         // login
//         setUserMenuData,
//         setUserComponentTaskData,
//         setUserLastLoginTimeData,
//         // layout
//         setUserMenuLayoutData,
//         setUserUsingTaskData,
//         setSidebarlistItem,

//         setJwtData,
//     }

//     return {
//         actions: bindActionCreators(actions, dispatch),
//         dispatch,
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TwmsMaterial);
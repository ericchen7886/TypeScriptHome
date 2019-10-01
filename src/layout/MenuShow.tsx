// /*
//     Author: SY
//     Date: 2018/11/29
//     Usage: Render Layout Menu
//     Parent: ./twmsMaterial.jsx, none
//     Childern: none, none
// */


// // react
// import * as React from 'react';
// // react router
// import { NavLink } from 'react-router-dom';
// // redux
// import { Dispatch, bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// // import {
// //     setSidebarlistItem,
// //     setSidebarlistMobilemenuexpanded,
// //     setDrawerOpen,
// // } from 'reducers/Layout/action';
// // selector
// // import {
// //     getSidebarListItem,
// //     getMobileMenuExpanded,
// //     getDrawerOpen,
// // } from 'reducers/Layout/selector';
// // axios
// // css、less、sass
// const MenuShowStyle = require('./MenuShowStyle.module.css');
// // shared component
// // material component
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Hidden from '@material-ui/core/Hidden';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { withStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import Drawer from '@material-ui/core/Drawer';
// // kendo component
// // presentational component
// // container component
// // other
// import LogoM from 'asset/inc/img/global/favicon.png';
// import twmsMenuRoutes from 'routes/twmsMenuRoutes';

// const StyledAppBar = withStyles({
//     root: {
//         zIndex: 50
//     }
// })(AppBar);

// const StyledExpansionPanel = withStyles({
//     root: {
//         margin: '0px',
//         width: '200px',
//         zIndex: 2,
//         boxShadow: "none",
//         position: "unset",
//     },
//     expanded: {

//     }
// })(ExpansionPanel);

// const StyledExpansionPanelSummary = withStyles({
//     root: {
//         '&:hover': {
//             color: 'red',
//         },
//     },
// })(ExpansionPanelSummary);

// const StyledExpansionPanelDetails = withStyles({
//     root: {
//         display: 'block',
//         padding: '0px',
//         borderRadius: "0px",

//         '&:hover': {
//             color: 'red',
//         },
//     },
// })(ExpansionPanelDetails);

// const StyledTab = withStyles({
//     root: {
//         backgroundColor: '#f4e8d2',
//         color: '#333',
//         background: '-webkit-linear-gradient(top, #f4e8d2, #dccbaf)',
//         opacity: 1,
//         fontSize: '1rem',
//         // padding: '0px',
//         minWidth: '0px',
//         zIndex: 80,
//         fontFamily: 'Helvetica, Arial, 微軟正黑體, sans-serif',
//         '&:hover': {
//             color: 'red'
//         }
//     },
//     selected: {
//         background: 'red',
//         color: 'white',
//         '&:hover': {
//             color: 'white'
//         }
//     },
// })(Tab);

// const StyledTabs = withStyles({
//     root: {
//         backgroundColor: '#f4e8d2',
//         color: '#333',
//         background: '-webkit-linear-gradient(top, #f4e8d2, #dccbaf)',
//         opacity: 1,
//         fontSize: '1rem',
//         padding: '0px',
//     },
// })(Tabs);

// const MenuMobile = (props) => {

//     return (
//         <Drawer
//             open={props.sidebarOpen}
//             onClose={props.handleDrawerClose}
//         >
//             <div className='logo'><img style={{ height: '7rem' }} src={LogoM} alt=''></img></div>
//             {twmsMenuRoutes.map((prop) => {
//                 return (
//                     <StyledExpansionPanel
//                         expanded={props.mobileMenuExpanded}
//                         onChange={props.handleMobileChange()}
//                         key={prop.menuId}
//                     >
//                         <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
//                             {prop.menuName}
//                         </StyledExpansionPanelSummary>
//                         <StyledExpansionPanelDetails>
//                             {prop.children && prop.children.map((pro) => {
//                                 return (
//                                     pro.children != null ?
//                                         <StyledExpansionPanel
//                                             key={pro.sidebarId}
//                                             expanded={
//                                                 pro.children.filter(function f(el) {
//                                                     return el.sidebarId === props.sidebarItemOnClick
//                                                 }).length > 0
//                                                 || props.sidebarItemOnClick === pro.sidebarId
//                                             }
//                                         >
//                                             <StyledExpansionPanelSummary
//                                                 expandIcon={<ExpandMoreIcon />}
//                                                 onClick={props.handleDrawerClick(pro.sidebarId, pro.sidebarName)}
//                                             >
//                                                 {pro.sidebarName}
//                                             </StyledExpansionPanelSummary>
//                                             <StyledExpansionPanelDetails>
//                                                 {pro.children.map((propss) => {
//                                                     return (
//                                                         <NavLink
//                                                             to={propss.path}
//                                                             className={MenuShowStyle.item}
//                                                             activeClassName='active'
//                                                             key={propss.sidebarId}
//                                                             onClick={props.handleDrawerClick(propss.sidebarId, propss.sidebarName)}
//                                                         >
//                                                             <ListItem button={true}>
//                                                                 {propss.sidebarName}
//                                                             </ListItem>
//                                                         </NavLink>
//                                                     )
//                                                 })}
//                                             </StyledExpansionPanelDetails>
//                                         </StyledExpansionPanel>
//                                         :
//                                         <NavLink
//                                             to={pro.path}
//                                             activeClassName='active'
//                                             key={pro.sidebarId}
//                                             className={MenuShowStyle.item}
//                                         >
//                                             <StyledExpansionPanel
//                                                 expanded={props.sidebarItemOnClick === pro.sidebarId}
//                                             >
//                                                 <StyledExpansionPanelSummary
//                                                     onClick={props.handleDrawerClick(pro.sidebarId, pro.sidebarName)}
//                                                 >
//                                                     {pro.sidebarName}
//                                                 </StyledExpansionPanelSummary>
//                                             </StyledExpansionPanel>
//                                         </NavLink>
//                                 )
//                             })}
//                         </StyledExpansionPanelDetails>
//                     </StyledExpansionPanel>
//                 )
//             })}
//         </Drawer>
//     )
// }

// /*
//     Usage: Get State from Redux
//     Store: state.sidebarList.sidebarListItemReducer
//         sidebarListItem: sidebar list的項目, 
//         sidebarOpen: sidebar list是否顯示,
//         mobileMenuExpanded: mobile狀態下的menu是否展開,
// */
// interface MenuShowProps {
//     sidebarListItem: string;
//     drawerOpen: boolean;
//     mobileMenuExpanded: boolean;
//     actions: any;
//     // dispatch: Dispatch<any>;

//     sidebarItemOnClick;
//     handleItemClick;
// }

// // interface MenuShowState {

// // }

// class MenuShow extends React.Component<MenuShowProps> {

//     /*
//         Usage: Change sidebarlistItem Content
//         Param: 點擊的Item名稱
//     */
//     public handleChange = () => (event: React.ChangeEvent<{}>, value: any) => {
//         this.props.actions.setSidebarlistItem(value);
//     }

//     /*
//         Usage: 改變Mobile Sidebarlist的展開狀態
//         Param: 展開狀態
//     */
//     public handleMobileChange = () => (event: React.ChangeEvent<{}>, expanded: boolean) => {
//         this.props.actions.setSidebarlistMobilemenuexpanded(expanded);
//     }

//     /*
//         Usage: 改變Sidebarlist的開啟狀態
//         Param: none
//     */
//     public handleClick = () => {
//         this.props.actions.setSidebarlistOpen(this.props.drawerOpen);
//     }

//     public handleDrawerClose = () => {
//         // console.log("drawerClose");
//         this.props.actions.setDrawerOpen(this.props.drawerOpen);
//     }

//     public handleDrawerClick = (sidebarId, sidebarName) => event => {

//         this.props.handleItemClick(sidebarId, sidebarName)
//         this.handleDrawerClose();
//     }

//     public render() {
//         return (
//             <React.Fragment>
//                 <Hidden smDown={true}>
//                     <StyledAppBar position='relative' >
//                         <StyledTabs
//                             variant="scrollable"
//                             onChange={this.handleChange()}
//                             value={this.props.sidebarListItem}
//                         >
//                             {twmsMenuRoutes.map((prop) => {
//                                 return (
//                                     <StyledTab
//                                         label={prop.menuName}
//                                         value={prop.children}
//                                         key={prop.menuId}
//                                     />
//                                 )
//                             })}
//                         </StyledTabs>
//                     </StyledAppBar>
//                 </Hidden>
//                 <Hidden smUp={true}>
//                     <MenuMobile
//                         sidebarOpen={this.props.drawerOpen}
//                         handleDrawerClose={this.handleDrawerClose}

//                         mobileMenuExpanded={this.props.mobileMenuExpanded}
//                         handleMobileChange={this.handleMobileChange}

//                         sidebarItemOnClick={this.props.sidebarItemOnClick}
//                         handleDrawerClick={this.handleDrawerClick}
//                     />
//                 </Hidden>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     sidebarListItem: getSidebarListItem(state),
//     drawerOpen: getDrawerOpen(state),
//     mobileMenuExpanded: getMobileMenuExpanded(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     const actions = {
//         setSidebarlistItem,
//         setSidebarlistMobilemenuexpanded,
//         setDrawerOpen,
//     }

//     return {
//         actions: bindActionCreators(actions, dispatch),
//         dispatch,
//     }
// };

// export default connect(
//     mapStateToProps, mapDispatchToProps,
// )(MenuShow);
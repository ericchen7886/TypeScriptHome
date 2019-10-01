// /*
//     Author: SY
//     Date: 2018/11/02
//     Usage: Render Layout Sidebar List
//     Parent: ./twmsMaterial.jsx, handleWidthChange
//     Childern: none, none
// */

// // react
// import * as React from 'react';
// // react router
// import { NavLink } from 'react-router-dom';
// // redux
// import { connect } from 'react-redux';
// import { Dispatch, bindActionCreators } from 'redux'
// import { setSidebarlistOpen } from '../reducers/Layout/action';
// // selector
// import { getSidebarListItem } from '../reducers/Layout/selector';
// import { getSidebarListOpen } from '../reducers/Layout/selector';
// // css less scss
// const SidebarListStyle = require('./SidebarListStyle.module.css');
// // custom component

// // material component
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Slide from '@material-ui/core/Slide';
// import IconButton from '@material-ui/core/IconButton';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import { withStyles } from '@material-ui/core/styles';
// import Hidden from '@material-ui/core/Hidden';
// import ListItem from '@material-ui/core/ListItem';
// // kendo component

// // other



// const StyledExpansionPanel = withStyles({
//     root: {
//         backgroundColor: '#433b38',
//         margin: '0px',
//         color: 'white',
//         position: 'initial',
//     },
//     expanded: {
//         backgroundColor: '#756c67',
//     }
// })(ExpansionPanel);

// const StyledExpansionPanelSummary = withStyles({
//     root: {
//         fontSize: '0.875rem',
//         margin: 0,
//         color: 'white',
//         textDecoration: 'none',
//         '&:hover': {
//             color: 'red',
//         }
//     },
// })(ExpansionPanelSummary);

// const StyledExpansionPanelDetails = withStyles({
//     root: {
//         display: 'block',
//         padding: '0px',
//     },
// })(ExpansionPanelDetails);


// const StyledIconButton = withStyles({
//     root: {
//         backgroundColor: '#a38f6a',
//         borderRadius: '0%',
//         '&:hover': {
//             backgroundColor: '#a38f6a',
//         }
//     },
// })(IconButton);

// const breadcrumbString = [
//     "隱約雷鳴，陰霾天空，但盼風雨來，能留你在此。",
//     "比方為誰，無我有問，九月露濕，待君之前。",
//     "不知此為何處，前往夢想之地；抵達夢想之地，不知此為何處。",
//     "It's the only NEET thing to do",
//     "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
// ]

// const num = Math.floor(Math.random() * breadcrumbString.length);

// /*
//     Usage: Sidebar List Item Render
//     Props:
//         sidebarListItem,
//     CSS: SidebarListStyle
// */
// interface SidebarListItemPrintProps {
//     sidebarItemOnClick: any;
//     sidebarListItem: any;
//     handleItemClick: any;
// }

// export const SidebarListItemPrint: React.FC<SidebarListItemPrintProps> = (props) => {

//     return (
//         props.sidebarListItem.map((prop) => {

//             return (
//                 prop.children != null ?
//                     <StyledExpansionPanel
//                         key={prop.taskId}
//                         expanded={
//                             prop.children.filter(function f(el) {
//                                 return el.taskId === props.sidebarItemOnClick
//                             }).length > 0
//                             || props.sidebarItemOnClick === prop.taskId
//                         }
//                     >
//                         <StyledExpansionPanelSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             onClick={props.handleItemClick(prop.taskId, prop.taskName)}
//                         >
//                             {prop.taskName}
//                         </StyledExpansionPanelSummary>
//                         <StyledExpansionPanelDetails>
//                             {prop.children.map((propss) => {
//                                 return (
//                                     propss.isExternalUrl === "N" ?
//                                         <NavLink
//                                             to={propss.menuUrl}
//                                             className={SidebarListStyle.item}
//                                             activeClassName='active'
//                                             key={propss.taskId}
//                                             onClick={props.handleItemClick(propss.taskId, prop.taskName)}
//                                         >
//                                             <ListItem button={true}>
//                                                 {propss.taskName}
//                                             </ListItem>
//                                         </NavLink>
//                                         :
//                                         <a
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             href={prop.menuUrl}
//                                             key={prop.taskId}
//                                             className={SidebarListStyle.item}
//                                         >
//                                             <ListItem button={true}>
//                                                 {propss.taskName}
//                                             </ListItem>
//                                         </a>
//                                 )
//                             })}
//                         </StyledExpansionPanelDetails>
//                     </StyledExpansionPanel>
//                     :
//                     <NavLink
//                         to={prop.path}
//                         activeClassName='active'
//                         key={prop.sidebarId}
//                         className={SidebarListStyle.item}
//                     >
//                         <StyledExpansionPanel
//                             expanded={props.sidebarItemOnClick === prop.sidebarId}
//                         >
//                             <StyledExpansionPanelSummary
//                                 onClick={props.handleItemClick(prop.sidebarId, prop.sidebarName)}
//                             >
//                                 {prop.sidebarName}
//                             </StyledExpansionPanelSummary>
//                         </StyledExpansionPanel>
//                     </NavLink>
//             )
//         })
//     )
// }

// /*
//     Usage: Sidebar List RWD Display Handle
//     Props: 
//         sidebarOpen,
//         sidebarListItem,
//         handleClick,
//     CSS: SidebarListStyle
// */
// interface SidebarListDisplayProps {
//     sidebarListItem: any;
//     sidebarOpen: boolean;
//     sidebarItemOnClick: any;
//     handleClick: () => void;
//     handleItemClick: (taskName, taskId) => void;
// }

// export const SidebarListDisplay: React.FC<SidebarListDisplayProps> = (props) => {

//     return (
//         <div>
//             <Hidden smDown={true}>
//                 <Slide
//                     direction='right'
//                     in={props.sidebarOpen}
//                     mountOnEnter={true}
//                     unmountOnExit={true}
//                     style={{ height: document.body.scrollHeight }}
//                 >
//                     <div className={SidebarListStyle.sidebarlist}>
//                         {
//                             <SidebarListItemPrint
//                                 sidebarListItem={props.sidebarListItem}
//                                 handleItemClick={props.handleItemClick}
//                                 sidebarItemOnClick={props.sidebarItemOnClick}
//                             />
//                         }
//                     </div>
//                 </Slide>
//                 <div
//                     className={SidebarListStyle.listitem + " " + SidebarListStyle.breadcrumb}
//                     style={props.sidebarOpen ?
//                         { width: 'calc(100% - 200px)' }
//                         : { width: '100%' }
//                     }
//                 >
//                     <StyledIconButton
//                         onClick={props.handleClick}
//                     >
//                         {props.sidebarOpen ?
//                             <KeyboardArrowLeftIcon />
//                             : <KeyboardArrowRightIcon />
//                         }
//                     </StyledIconButton>
//                     &nbsp;&nbsp;&nbsp;&nbsp;{breadcrumbString[num]}
//                 </div>
//             </Hidden>
//         </div>
//     )
// }

// /*
//     Usage: Get State from Redux
//     Store: state.sidebarList.sidebarListItemReducer
//         sidebarListItem: sidebar list的項目, 
//         sidebarOpen: sidebar list是否顯示,
//     Process: 
//         sidebarListItem, sidebarOpen: pass to <SidebarListDisplay/> as props
// */
// interface SidebarListProps {
//     sidebarListItem: any;
//     sidebarOpen: boolean;
//     actions: any;
//     sidebarItemOnClick: any;
//     handleWidthChange: (isOpen: boolean) => void;
//     handleItemClick: (taskName, taskId) => void;

// }

// class SidebarList extends React.Component<SidebarListProps, any> {

//     /*
//         Usage: Change sidebarOpen
//         Param: none
//         As Callback: <SidebarListDisplay/>
//     */
//     public handleClick = () => {
//         this.props.actions.setSidebarlistOpen(this.props.sidebarOpen);
//         this.props.handleWidthChange(!this.props.sidebarOpen);
//     }

//     public render() {

//         return (
//             <SidebarListDisplay
//                 sidebarItemOnClick={this.props.sidebarItemOnClick}
//                 sidebarListItem={this.props.sidebarListItem}
//                 sidebarOpen={this.props.sidebarOpen}
//                 handleClick={this.handleClick}
//                 handleItemClick={this.props.handleItemClick}

//             />
//         )
//     }
// }



// const mapStateToProps = state => ({
//     sidebarListItem: getSidebarListItem(state),
//     sidebarOpen: getSidebarListOpen(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     const actions = {
//         setSidebarlistOpen,
//     }

//     return {
//         actions: bindActionCreators(actions, dispatch),
//         dispatch,
//     }
// }

// export default connect(
//     mapStateToProps, mapDispatchToProps,
// )(SidebarList);

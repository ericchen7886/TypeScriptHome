// import React, { useState } from 'react';
// // redux
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import {
//     setJwtData
// } from 'reducers/Login/action';
// import {
//     setDrawerOpen,
// } from 'reducers/Layout/action';
// // selector
// import {
//     getJwtData,
//     getUserid,
// } from 'reducers/Login/selector';
// import {
//     getDrawerOpen
// } from 'reducers/Layout/selector';
// // axios
// import Axios from 'axios';
// // css
// const Style = require('./titleandtool_style.module.css');
// // shared component
// // material UI
// import IconButton from '@material-ui/core/IconButton';
// import HomeIcon from '@material-ui/icons/Home';
// import MapIcon from '@material-ui/icons/Map';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// import Hidden from '@material-ui/core/Hidden';
// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Tooltip from '@material-ui/core/Tooltip';
// // react router
// // react redux
// // img
// import Logo from 'asset/inc/img/global/logo.png';

// import './i18n_Layout';

// const ToolbarWindow: React.FC<{}> = () => {

//     const [anchorEl, setAnchorEl] = useState<any>(null);

//     return (
//         <div>
//             <Hidden smDown={true}>
//                 <div className='logo'><img style={{ height: '2.5rem' }} src={Logo} alt=''></img></div>
//             </Hidden>
//             <ul className='top-nav'>
//                 <li>
//                     <IconButton style={{ backgroundColor: '#a38f6a', color: 'white' }} >
//                         <Tooltip
//                             title={"按了也沒反應"}
//                         >
//                             <HomeIcon />
//                         </Tooltip>
//                     </IconButton>
//                 </li>
//                 <li>
//                     <IconButton style={{ backgroundColor: '#a38f6a', color: 'white' }} >

//                         <Tooltip
//                             title={"就說沒有反應"}
//                         >
//                             <MapIcon />
//                         </Tooltip>
//                     </IconButton>
//                 </li>
//                 <li>
//                     <IconButton
//                         style={{ backgroundColor: '#a38f6a', color: 'white' }}
//                         aria-owns={anchorEl ? 'UserFunction' : undefined}
//                         aria-haspopup="true"
//                         onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => setAnchorEl(event.currentTarget)}
//                     >
//                         <Tooltip
//                             title={"按了有反應"}
//                         >
//                             <PersonOutlineIcon />
//                         </Tooltip>
//                     </IconButton>
//                     <Menu
//                         id="UserFunction"
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         onClose={() => setAnchorEl(null)}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'center',
//                         }}
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'center',
//                         }}
//                         getContentAnchorEl={null}
//                     >
//                         <MenuItem>再按沒有反應</MenuItem>
//                     </Menu>
//                 </li>
//                 <li>
//                     <IconButton
//                         style={{ backgroundColor: '#a38f6a', color: 'white' }}
//                     >
//                         <Tooltip
//                             title={"毫無反應就是個按鈕"}
//                         >
//                             <PowerSettingsNewIcon />
//                         </Tooltip>
//                     </IconButton>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export class TitleandTool extends React.Component<any, any> {

//     public handleDrawerOpen = () => {
//         // console.log("drawerOpen");
//         this.props.actions.setDrawerOpen(this.props.drawerOpen);
//     }

//     render() {

//         return (
//             <div className='header'>

//                 <ToolbarWindow

//                 />

//                 <Hidden smUp={true}>
//                     <div className='logo'>
//                         <IconButton
//                             onClick={this.handleDrawerOpen}
//                             style={{
//                                 paddingLeft: "0px",
//                             }}
//                         >
//                             <MenuIcon fontSize="large" />
//                         </IconButton>
//                     </div>
//                 </Hidden>


//             </div >
//         )
//     }
// };

// const mapStateToProps = state => ({
//     jwtData: getJwtData(state),
//     username: getUserid(state),
//     drawerOpen: getDrawerOpen(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     const actions = {
//         setJwtData,
//         setDrawerOpen,
//     }

//     return {
//         actions: bindActionCreators(actions, dispatch),
//         dispatch,
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TitleandTool);
// import * as React from 'react'
// // view&component

// // lazy
// const Title = React.lazy(() => import('view/Title/Title_home'));
// const Form = React.lazy(() => import('view/Form/Form_home'));
// const Button = React.lazy(() => import('view/Button/Button_home'));
// const Popup = React.lazy(() => import('view/Popup/Popup_home'));
// const Alert = React.lazy(() => import('view/Alert/Alert_home'));
// const Tab = React.lazy(() => import('view/Tab/Tab_home'));
// const PageFlow = React.lazy(() => import('view/PageFlow/Pageflow_home'));
// const Calendar = React.lazy(() => import('view/Calendar/Calendar_home'));
// const MultiInput = React.lazy(() => import('view/MultiInput/MultiInput_home'));
// const Loading = React.lazy(() => import('view/Loading/Loading_home'));
// const Other = React.lazy(() => import('view/Other/Other_home'));

// export interface TwmsMenuRoutes {

//     menuId: number;
//     menuName: string;
//     children: Array<{
//         path: string,
//         sidebarId: string,
//         sidebarName: string,
//         component: any,
//         children?: Array<{
//             path: string,
//             sidebarId: string,
//             sidebarName: string,
//             component: any
//         }>
//     }>;
// };

// const twmsMenuRoutes: TwmsMenuRoutes[] = [

//     {
//         menuId: 0,
//         menuName: "UI_Pattern",
//         children: [
//             {
//                 path: "/sample/title",
//                 sidebarId: "title",
//                 sidebarName: '標題',
//                 component: Title,
//             },
//             {
//                 path: "/sample/form",
//                 sidebarId: "form",
//                 sidebarName: '表格',
//                 component: Form,
//             },
//             {
//                 path: "/sample/btn",
//                 sidebarId: "btn",
//                 sidebarName: '按鈕',
//                 component: Button,
//             },
//             {
//                 path: "/sample/popup",
//                 sidebarId: "popup",
//                 sidebarName: 'Popup',
//                 component: Popup,
//             },
//             {
//                 path: "/sample/alert",
//                 sidebarId: "alert",
//                 sidebarName: '警告訊息',
//                 component: Alert,
//             },

//             {
//                 path: "/sample/tab",
//                 sidebarId: "tab",
//                 sidebarName: '頁籤',
//                 component: Tab,
//             },
//             {
//                 path: "/sample/pageflow",
//                 sidebarId: "pageflow",
//                 sidebarName: '頁面流',
//                 component: PageFlow,
//             },
//             {
//                 path: "/sample/calendar",
//                 sidebarId: "calendar",
//                 sidebarName: '行事曆',
//                 component: Calendar,
//             },
//             {
//                 path: "/sample/multiinput",
//                 sidebarId: "multiinput",
//                 sidebarName: '多筆輸入錯誤訊息顯示',
//                 component: MultiInput,
//             },
//             {
//                 path: "/sample/loading",
//                 sidebarId: "loading",
//                 sidebarName: '載入動畫',
//                 component: Loading,
//             },
//             {
//                 path: "/sample/other",
//                 sidebarId: "other",
//                 sidebarName: '其他',
//                 component: Other,
//             },
//         ]
//     }

// ];

// export default twmsMenuRoutes;
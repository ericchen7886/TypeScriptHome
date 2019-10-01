import React from "react";
import { Redirect } from "react-router";
// view&component
import TwmsMaterial from "../layout/TwmsMaterial";

const indexRoutes = [
    { path: "/sample", component: TwmsMaterial },
    { path: "/", component: () => <Redirect to="/sample" /> }
];

export default indexRoutes;

import {Route, Switch} from "react-router-dom";
import React from "react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/signIn" component={SignIn} exact />
        </Switch>
    )
}
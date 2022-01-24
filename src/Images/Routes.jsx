import {Route, Switch} from "react-router-dom";
import React from "react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Profil from "./Pages/Profil";
import Janken from "./Pages/Games/Janken";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/signIn" component={SignIn} exact />
            <Route path="/games" component={Games} exact />
            <Route path="/profil" component={Profil} exact />
            <Route path="/game/janken" component={Janken} exact />
        </Switch>
    )
}
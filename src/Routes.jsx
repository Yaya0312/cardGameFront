import {Route, Switch} from "react-router-dom";
import React from "react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Games from "./Pages/Games";
import Profil from "./Pages/Profil";
import Janken from "./Pages/Games/Janken";
import BlackJack from "./Pages/Games/BlackJack";
import Battle from "./Pages/Games/Battle";
import ListUsers from "./Pages/ListUsers";
import { Redirect } from "react-router-dom";
import AccountApi from "./api/AccountApi";
import NotFound from "./Pages/ErrorsPages/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact >
                {AccountApi.isLogged() ? <Redirect to="/games"/> : <Redirect to="/signIn"/> }
            </Route>
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/signIn" component={SignIn} exact />
            <Route path="/games" component={Games} exact />
            <Route path="/profil" component={Profil} exact />
            <Route path="/game/janken" component={Janken} exact />
            <Route path="/game/blackjack" component={BlackJack} exact />
            <Route path="/game/battle" component={Battle} exact />
            <Route path="/users" component={ListUsers} exact />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}
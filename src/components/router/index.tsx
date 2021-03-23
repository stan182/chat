import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import SignIn from "../auth/signin";
import SignUp from "../auth/signup";
import Home from "../home";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Redirect exact from="/" to="/signin" />
        </Switch>
    </BrowserRouter>
);

export default Router;

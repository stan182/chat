import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import SignIn from "../auth/signin";
import SignUp from "../auth/signup";

const Router = () => (
    <BrowserRouter>
        <Redirect from="/" to="/signin" />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>
);

export default Router;

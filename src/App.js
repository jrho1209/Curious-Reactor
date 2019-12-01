import React from 'react';
import logo from './logo.svg';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import LogIn from "./views/LogIn/LogIn.js";
import Registration from "views/LogIn/Registration.js";

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

function App() {
    const hist = createBrowserHistory();
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/homepage" component={Admin} />
                <Route path="/login" component={LogIn} />
                <Route path="/registration" component={Registration} />
                <Redirect from="/" to="/homepage/dashboard" />
            </Switch>
        </Router>
    );
}

export default withAuthenticator(App, true);

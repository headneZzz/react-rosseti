import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import Initiatives from "./pages/initiatives";
import 'antd/dist/antd.css';
import './main.css';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <PrivateRoute path="/initiatives" component={Initiatives}/>
                <Redirect from="/" to="/initiatives"/>
            </Switch>
        </BrowserRouter>
    );
}

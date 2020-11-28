import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import Initiatives from "./pages/initiatives";
import InitiativeOne from "./pages/initiativeOne";
import 'antd/dist/antd.css';
import './main.css';
import MainPage from './pages/initiatives/index'
import FormPage from './components/Form'
import ProfilePage from './pages/Profile'
import CreateDocument from './pages/CreateDocument'
export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                <PrivateRoute path="/initiativeOne" component={InitiativeOne}/>
                <MainPage>
                    <PrivateRoute path="/main" component={FormPage}/>
                    <PrivateRoute path="/profile" component={ProfilePage}/>
                    <PrivateRoute path="/createdocument" component={CreateDocument}/>
                </MainPage>
                
                <Redirect from="/" to="/profile"/>
            </Switch>
        </BrowserRouter>
    );
}

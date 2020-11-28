import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import Initiatives from "./pages/initiatives";

import 'antd/dist/antd.css';
import './main.css';
import MainPage from './pages/initiatives/index'
import FormPage from './components/Form'
import InitiativeOne from './pages/initiativeOne/index'
import ProfilePage from './pages/Profile'
import CreateDocument from './pages/CreateDocument'
import EditDocument from './pages/EditDocument'
import Latest from './components/Form2'
import SelfProfile from './pages/Profile2'
export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                
                <MainPage>
                    <PrivateRoute path="/initiativeOne" component={InitiativeOne}/>
                    <PrivateRoute path="/main" component={FormPage}/>
                    <PrivateRoute path="/profile" component={ProfilePage}/>
                    <PrivateRoute path="/createdocument" component={CreateDocument}/>
                    <PrivateRoute path="/editdocument" component={EditDocument}/>
                    <PrivateRoute path="/latest" component={Latest}/>
                    <PrivateRoute path="/selfprofile" component={SelfProfile}/>
                </MainPage>
                
                <Redirect from="/" to="/profile"/>
            </Switch>
        </BrowserRouter>
    );
}

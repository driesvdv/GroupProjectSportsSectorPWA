import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MemberRouter from "./routers/MemberRouter";
import RegisterPage from "./pages/authentication/RegisterPage";
import LoginPage from "./pages/authentication/LoginPage";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={"/"}>
                    <Redirect to={"/login"}/>
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/registreren"}>
                    <RegisterPage/>
                </Route>
                <Route path={"/leden"}>
                    <MemberRouter/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import MemberRouter from "./routers/MemberRouter";
import RegisterPage from "./pages/authentication/RegisterPage";
import LoginPage from "./pages/authentication/LoginPage";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/routes/PrivateRoute";



function App() {
    return (
        <Fragment>
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
                <PrivateRoute path={"/leden"}>
                    <MemberRouter/>
                </PrivateRoute>
            </Switch>
        </Fragment>
    );
}

export default App;

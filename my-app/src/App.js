import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MemberRouter from "./routers/MemberRouter";
import RegisterPage from "./pages/authentication/RegisterPage";
import LoginPage from "./pages/authentication/LoginPage";
import NavBar from "./components/NavBar";
import {createBrowserHistory} from "history"
import {AuthContextProvider} from "./context/AuthContext";
import PrivateRoute from "./components/routes/PrivateRoute";

export const history= createBrowserHistory();

function App() {
    return (
        <AuthContextProvider>
            <Router history={history}>
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
            </Router>
        </AuthContextProvider>
    );
}

export default App;

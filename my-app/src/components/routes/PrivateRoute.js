import React from 'react';
import {Redirect, Route} from "react-router-dom";

function PrivateRoute ({ children, ...rest }) {
    return (
        <Route {...rest} render={() => {
            return localStorage.getItem("access_token")
                ? children
                : <Redirect to='/login' />
        }} />
    )
}

export default PrivateRoute;

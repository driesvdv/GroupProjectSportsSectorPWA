import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import MemberListPage from "../pages/members/MemberListPage";
import MemberDetailPage from "../pages/members/MemberDetailPage";
import MemberAddPage from "../pages/members/MemberAddPage";
import MemberDetailClubPage from "../pages/members/MemberDetailClubPage";
import MemberDetailClubAddPage from "../pages/members/MemberDetailClubAddPage";

function MemberRouter() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <MemberListPage/>
            </Route>
            <Route exact path={`${path}/:memberId`}>
                <MemberDetailPage/>
            </Route>
            <Route exact path={`${path}/:memberId/clubs`}>
                <Redirect to={path}/>
            </Route>
            <Route exact path={`${path}/:memberId/clubs/add`}>
                <MemberDetailClubAddPage/>
            </Route>
            <Route exact path={`${path}/:memberId/clubs/:clubId`}>
                <MemberDetailClubPage/>
            </Route>
            <Route exact path={`${path}/add`}>
                <MemberAddPage/>
            </Route>
        </Switch>
    );
}

export default MemberRouter;
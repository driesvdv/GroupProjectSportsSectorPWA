import React, {Fragment} from 'react';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import MemberListPage from "../pages/members/MemberListPage";
import MemberDetailPage from "../pages/members/MemberDetailPage";
import MemberAddPage from "../pages/members/MemberAddPage";
import MemberDetailClubPage from "../pages/members/MemberDetailClubPage";
import MemberDetailClubAddPage from "../pages/members/MemberDetailClubAddPage";
import NavBar from "./../components/NavBar";


function MemberRouter() {
    let { path, url } = useRouteMatch();

    return (
        <div className={"relative min-h-screen md:flex"}>
            <img className={"top-0 right-0 max-w-swoosh absolute -z-10"} src={process.env.PUBLIC_URL + '/assets/top-large.svg'} />
            <NavBar />
            <Switch>
                <Route exact path={path}>
                    <MemberListPage />
                </Route>
                <Route exact path={`${path}/add`}>
                    <MemberAddPage />
                </Route>
                <Route exact path={`${path}/:memberId`} component={MemberDetailPage}/>
                <Route exact path={`${path}/:memberId/clubs`}>
                    <Redirect to={path} />
                </Route>
                <Route exact path={`${path}/:memberId/clubs/add`} component={MemberDetailClubAddPage} />
                <Route exact path={`${path}/:memberId/clubs/:clubId`}>
                    <MemberDetailClubPage />
                </Route>
            </Switch>
            <img className={"bottom-0 left-0 absolute -z-10"} src={process.env.PUBLIC_URL + '/assets/bottom-large.svg'} />
        </div>
    );
}

export default MemberRouter;
import React from 'react';
import PolygonWithLogo from "../../components/authentication/PolygonWithLogo";
import MobileTopPolygon from "../../components/authentication/MobileTopPolygon";
import Title from "../../components/authentication/Title";
import Registerform from "../../components/authentication/Registerform";
import MobileBottomRegisterPolygon from "../../components/authentication/MobileBottomRegisterPolygon";
import {useHistory} from "react-router-dom";

function RegisterPage(props) {
    const history = useHistory()
    if (sessionStorage.getItem("access_token")) {
        history.push("/leden")
    }
    return (
        <div className={"lg:grid lg:grid-cols-12 gap-4 items-center justify-center h-screen"}>
            <PolygonWithLogo/>
            <MobileTopPolygon/>
            <div className={"lg:col-span-4 z-20 mx-10"}>
                <Title text={"Account aanmaken"}/>
                <Registerform/>
            </div>
            <MobileBottomRegisterPolygon/>
        </div>
    );
}

export default RegisterPage;

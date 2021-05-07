import React from 'react';
import LoginForm from "../../components/authentication/LoginForm";
import Title from "../../components/authentication/Title";
import PolygonWithLogo from "../../components/authentication/PolygonWithLogo";
import MobileTopPolygon from "../../components/authentication/MobileTopPolygon";
import MobileBottomPolygon from "../../components/authentication/MobileBottomPolygon";

function LoginPage() {
    return (
        <div className={"lg:grid lg:grid-cols-12 gap-4 items-center justify-center h-screen"}>
            <PolygonWithLogo/>
            <MobileTopPolygon/>
            <div className={"lg:col-span-4 z-20 mx-10"}>
                <Title text={"Log in met je account"}/>
                <LoginForm/>
            </div>
            <MobileBottomPolygon/>
        </div>
    );
}

export default LoginPage;
import React from 'react';

function PolygonWithLogo() {
    return (
        <div className={"lg:col-span-6"}>
            <div className={"hidden lg:block fixed bottom-0 h-screen w-1/2 items-start"}>
                <img className={"h-full w-full"} src={process.env.PUBLIC_URL + '/assets/left.svg'} alt={"left-polygon"}/>
            </div>
            <div className={"lg:relative flex lg:flex-start justify-center pt-24"}>
                <img className={"lg:w-20rem lg:pt-0 w-40"} src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt={"sport plus logo"}/>
            </div>
        </div>
    );
}

export default PolygonWithLogo;

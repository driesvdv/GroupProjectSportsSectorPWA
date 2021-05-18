import React from 'react';

function MobileBottomRegisterPolygon(props) {
    return (
        <div className={"lg:hidden"}>
            <div className={"fixed bottom-0 left-0"}>
                <img src={process.env.PUBLIC_URL + '/assets/bottom-register.svg'} alt={"bottom-polygon"}/>
            </div>
        </div>
    );
}

export default MobileBottomRegisterPolygon;

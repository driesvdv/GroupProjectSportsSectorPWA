import React from 'react';

function MobileTopPolygon() {
    return (
        <div className={"lg:hidden"}>
            <div className={"fixed top-0 right-0"}>
                <img src={process.env.PUBLIC_URL + '/assets/top.svg'} alt={"bottom-polygon"}/>
            </div>
        </div>
    );
}

export default MobileTopPolygon;

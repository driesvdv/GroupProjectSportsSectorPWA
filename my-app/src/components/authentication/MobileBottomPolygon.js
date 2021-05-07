import React from 'react';

function MobileBottomPolygon() {
    return (
        <div className={"lg:hidden"}>
            <div className={"absolute bottom-0 left-0"}>
                <img src={process.env.PUBLIC_URL + '/assets/bottom.svg'} alt={"bottom-polygon"}/>
            </div>
        </div>
    );
}

export default MobileBottomPolygon;
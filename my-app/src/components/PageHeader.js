import React from 'react';
import {NavLink} from "react-router-dom";

function PageHeader({ Link, Title, SubTitle }) {
    return (
        <div className={"flex"}>
            <NavLink to={Link}>
                <img className={"flex-none p-2 w-12 h-12 mt-2 cursor-pointer"} src={process.env.PUBLIC_URL + '/assets/left-arrow.svg'} />
            </NavLink>
            <div className={"border-l-2 p-2 border-gray-dark flex-grow w-32 z-30"}>
                <p className={"text-blue-dark font-montserrat text-3xl font-bold p-1"}>{Title}</p>
                <p className={"text-green font-montserrat font-normal p-1 text-sm"}>{SubTitle}</p>
            </div>
        </div>


    );
}

export default PageHeader;
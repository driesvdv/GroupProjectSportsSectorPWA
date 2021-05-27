import React from 'react';
import {NavLink} from "react-router-dom";

function PageHeader({link, title, subtitle}) {
    return (
        <div className={"flex fixed mt-8 h-24"}>
            {link ? (
                <NavLink to={link}>
                    <img className={"flex-none p-2 w-12 h-12 mt-2 cursor-pointer"}
                         src={process.env.PUBLIC_URL + '/assets/left-arrow.svg'} alt={"Arrow"}/>
                </NavLink>
            ) : (
                <img className={"flex-none p-2 w-12 h-12 mt-2"}
                     src={process.env.PUBLIC_URL + '/assets/users-colored.svg'} alt={"Users"}/>
            )}
            <div className={"border-l-2 p-2 border-gray-dark flex-grow w-64"}>
                {title ? (
                    <p className={"text-blue-dark font-montserrat text-3xl font-bold p-1"}>{title}</p>
                ) : (
                    <div className={"p-1 mt-3 w-48 h-8 bg-grey animate-pulse rounded-md"}/>
                )}
                {subtitle ? (
                    <p className={"text-green font-montserrat font-normal p-1 text-sm"}>{subtitle}</p>
                ): (
                    <div className={"p-1 mt-3 w-24 h-6 bg-grey animate-pulse rounded-md"}/>
                )}
            </div>
        </div>
    );
}

export default PageHeader;

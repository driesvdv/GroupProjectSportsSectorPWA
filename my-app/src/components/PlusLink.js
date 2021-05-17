import React from 'react';
import {Link, NavLink} from "react-router-dom";

function PlusLink({ link }) {
    return (
        <NavLink to={link} className="bottom-0 right-0 absolute rounded-full mr-8 mb-8 cursor-pointer hover:shadow-dark">
            <img src={process.env.PUBLIC_URL + '/assets/toevoegen-knop.svg'} />
        </NavLink>


    );
}

export default PlusLink;
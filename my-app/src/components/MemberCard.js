import React from 'react';
import {Link, NavLink} from "react-router-dom";
import moment from 'moment';

function MemberCard({ member }) {
    return (
        <NavLink to={`/leden/${member.id}`} className={"border-gray p-2 mx-auto shadow flex justify-between my-5 z-30 rounded hover:shadow-dark"}>
            <div className={"pb-2"}>
                <p className={"font-montserrat font-medium text-lg"}>{member.first_name} {member.last_name}</p>
                <p className={"text-base text-green font-normal"}>{moment.duration(moment().diff(member.birth_date)).asYears().toFixed(0)} jaar</p>
            </div>
            <div className={"flex flex-col justify-center mr-4"}>
                <img src={process.env.PUBLIC_URL + '/assets/chevron-right.svg'} />
            </div>
        </NavLink>

    );
}

export default MemberCard;
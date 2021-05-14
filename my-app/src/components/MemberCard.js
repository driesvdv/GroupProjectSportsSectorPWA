import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

function MemberCard({ member }) {
    return (
        <a className={"border-gray p-2 mx-auto shadow flex my-5 rounded hover:shadow-dark"}
            href={`/members/${member.id}`}>
            <div className={"pb-2"}>
                <p className={"font-montserrat font-medium text-lg"}>{member.firstName} {member.lastName}</p>
                <p className={"text-base text-green font-normal"}>{moment.duration(moment().diff(member.birthDate)).asYears().toFixed(0)} jaar</p>
            </div>

        </a>

    );
}

export default MemberCard;
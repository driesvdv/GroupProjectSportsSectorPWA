import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

function MemberCard({ member }) {
    const calculateYears = function () {
        let firstDate = moment() //Create date using string-format constructor
        let secondDate = moment(member.birthDate);
        let duration = moment.duration(secondDate.diff(firstDate));
        return duration.asYears();
    }

    return (
        <a href={`/members/${member.id}`}>
            <div>
                <p>{member.firstName} {member.lastName}</p>
                <p>{moment.duration(moment().diff(member.birthDate)).asYears().toFixed(0)} jaar</p>
            </div>

        </a>

    );
}

export default MemberCard;
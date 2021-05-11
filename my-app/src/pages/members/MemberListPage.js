import React from 'react';
import MemberCard from '../../components/MemberCard';
import moment from 'moment'

function MemberListPage(props) {
    const members = [{
        id: 1,
        firstName: 'Arthur',
        lastName: 'Deblaere',
        birthDate: moment("1998-03-02"),
    },
    {
        id: 2,
        firstName: 'Sven',
        lastName: 'De mol',
        birthDate: moment("1984-12-25"),
    },
    {
        id: 3,
        firstName: 'Anne',
        lastName: 'Lotte',
        birthDate: moment("1995-05-12"),
    }]
    return (
        <div>
            <p className={"text-blue-dark text-3xl"}>Members</p>
            {members.map((member, index) => {
                return <MemberCard key={index} member={member} />
            })}
        </div>
    );
}

export default MemberListPage;
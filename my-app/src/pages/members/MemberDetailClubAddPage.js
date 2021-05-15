import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import MemberRegistration from "../../components/members/MemberRegistration";

function MemberDetailClubAddPage(props) {
    let {memberId} = useParams();


    return (
        <div className={"p-10 text-2xl font-bold"}>
            <div>
                <MemberRegistration/>
            </div>
        </div>
    );
}

export default MemberDetailClubAddPage;
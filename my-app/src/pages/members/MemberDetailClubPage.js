import React from 'react';
import {useParams} from "react-router-dom";

function MemberDetailClubPage(props) {
    let {memberId, clubId} = useParams();


    return (
        <div>member detail club</div>
    );
}

export default MemberDetailClubPage;
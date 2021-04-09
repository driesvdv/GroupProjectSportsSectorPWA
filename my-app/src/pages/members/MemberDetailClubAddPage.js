import React from 'react';
import {useParams} from "react-router-dom";

function MemberDetailClubAddPage(props) {
    let {memberId} = useParams();

    return (
        <div>member detail add club</div>
    );
}

export default MemberDetailClubAddPage;
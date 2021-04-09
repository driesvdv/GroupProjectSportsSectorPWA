import React from 'react';
import {useParams} from "react-router-dom"

function MemberDetailPage(props) {
    let {memberId} = useParams();

    return (
        <div>member detail</div>
    );
}

export default MemberDetailPage;
import React from 'react';
import {useParams} from "react-router-dom";
import Echo from "laravel-echo"

function MemberDetailClubAddPage(props) {
    let {memberId} = useParams();

    window.Pusher = require('pusher-js');

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '5070279b-cd35-4b59-9fe7-d52e3bbd7674',
        wsHost: window.location.hostname,
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
    });

    window.Echo.channel(`groups.2`)
        .listen('RegistrationAdded', (e) => {
            console.log(e)
        })

    return (
        <div>member detail add club</div>
    );
}

export default MemberDetailClubAddPage;
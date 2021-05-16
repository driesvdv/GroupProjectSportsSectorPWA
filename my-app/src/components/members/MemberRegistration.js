import React, {useState} from 'react';
import Echo from "laravel-echo";
import {useParams} from "react-router-dom";

const MemberRegistration = () => {
    let {memberId} = useParams();

    const [groupId, setGroupId] = useState(null);
    const [clubId, setClubId] = useState(null);

    window.Pusher = require('pusher-js');

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '5070279b-cd35-4b59-9fe7-d52e3bbd7674',
        wsHost: window.location.hostname,
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
    });

    window.Echo.channel(`groups`)
        .listen('RegistrationAdded', (e) => {
            console.log(e)
        });

    const handleClubChange = e => {

    }

    const handleSubmit = e => {

    }

    return (
            <div className={"flex flex-col"}>
                <form onSubmit={handleSubmit()} className={"flex flex-col"}>
                    <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                        <img src={process.env.PUBLIC_URL + '/assets/at sign.svg'}/>
                        <input className={`pl-2 text-base w-full bg-white `} type={"email"} name={"email"}
                               placeholder={"E-mailadres"} onChange={handleClubChange}/>
                    </div>
                </form>
            </div>
    );
};

export default MemberRegistration;
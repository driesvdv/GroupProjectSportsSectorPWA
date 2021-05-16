import React, {useState} from 'react';
import Echo from "laravel-echo";
import {useParams} from "react-router-dom";

const MemberRegistration = () => {
    let {memberId} = useParams();

    const [loading, setLoading] = useState(false);

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

    const handleGroupChange = e => {

    }

    const handleTimeChange = e => {

    }

    const handleSubmit = e => {

    }

    return (
        <div className={"flex flex-col w-64"}>
            <form onSubmit={handleSubmit()} className={"flex flex-col space-y-10"}>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/home-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Club"}
                            placeholder={"E-mailadres"} onChange={handleClubChange}>
                        <option value="0" selected disabled>Club</option>
                    </select>
                </div>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/users-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Group"}
                            placeholder={"E-mailadres"} onChange={handleGroupChange}>
                        <option value="0" selected disabled>Groep</option>
                    </select>
                </div>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/clock-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Time"}
                            placeholder={"E-mailadres"} onChange={handleTimeChange}>
                        <option value="0" selected disabled>Tijdstip</option>
                    </select>
                </div>
                <input
                    className={"rounded-full py-2 text-2xl font-bold text-white bg-blue hover:bg-blue-dark cursor-pointer"}
                    type="submit" value={loading ? "Laden..." : "Inschrijven"} disabled={loading}/>
            </form>
        </div>
    );
};

export default MemberRegistration;
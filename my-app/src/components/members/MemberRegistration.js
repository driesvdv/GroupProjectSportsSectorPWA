import React, {useEffect, useState} from 'react';
import Echo from "laravel-echo";
import {useParams} from "react-router-dom";
import axiosInstance from "../../services/axios.service";

const MemberRegistration = () => {
    let {memberId} = useParams();

    const [loading, setLoading] = useState(false);

    const [clubs, setClubs] = useState(null);
    const [groups, setGroups] = useState(null);
    const [groupNames, setGroupnames] = useState(null);
    const [times, setTimes] = useState(null);

    const [groupId, setGroupId] = useState(null);
    const [clubId, setClubId] = useState('DEFAULT');
    const [groupName, setGroupName] = useState('DEFAULT');

    window.Pusher = require('pusher-js');

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: '5070279b-cd35-4b59-9fe7-d52e3bbd7674',
        wsHost: window.location.hostname,
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
        enabledTransports: ['ws', 'wss']
    });

    window.Echo.channel(`groups`)
        .listen('RegistrationAdded', ({group}) => {
                if (groups) {
                    let newArr = [...groups];
                    newArr[newArr.findIndex(x => x.id === group.id)] = group;
                    setGroups(newArr)
                    setTimes(newArr.filter(group => group.name === groupName)
                        .map((data, index) => <option key={index}
                                                      data-group-id={data.id}
                                                      disabled={data.free_spaces === 0}
                                                      value={data.time}>{data.time} ({data.free_spaces} plaatsen
                            beschikbaar)</option>
                        ))
                }
            }
        );

    useEffect(() => {
        axiosInstance
            .get('/club/sportclubs')
            .then(({data}) => {
                let array = data.data;
                setClubs(array.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                }))
            })
    }, [])

    const handleClubChange = ({target}) => {
        let id = target.children[target.selectedIndex].value
        setClubId(id)
        setGroupName("DEFAULT")
        setGroupId("DEFAULT")

        axiosInstance
            .get('/groups/' + id)
            .then(({data}) => {
                setGroups(data)
                setGroupnames(Array.from(new Set(data.map(group => group.name)))
                    .map((group, index) => {
                        return <option key={index} value={group}>{group}</option>
                    }))
            })
    }

    const handleGroupChange = ({target}) => {
        let name = target.children[target.selectedIndex].value
        setGroupName(name);
        setGroupId("DEFAULT")

        setTimes(groups.filter(group => group.name === name)
            .map((data, index) => <option key={index} data-group-id={data.id}
                                          disabled={data.free_spaces === 0}
                                          value={data.time}>{data.time} ({data.free_spaces} plaatsen
                beschikbaar)</option>
            ))
    }

    const handleTimeChange = ({target}) => {
        setGroupId(target.children[target.selectedIndex].dataset.groupId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosInstance.post('/registrations', {
            "group_id": groupId,
            "registrant_id": memberId
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className={"flex flex-col w-64"}>
            <form onSubmit={handleSubmit} className={"flex flex-col space-y-10"}>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/home-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Club"}
                            placeholder={"E-mailadres"} onChange={handleClubChange} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" selected disabled>Club</option>
                        {clubs}
                    </select>
                </div>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/users-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Group"} value={groupName}
                            placeholder={"E-mailadres"} onChange={handleGroupChange}>
                        <option value="DEFAULT" selected disabled>Groep</option>
                        {groupNames}
                    </select>
                </div>
                <div className={`flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white`}>
                    <img src={process.env.PUBLIC_URL + '/assets/clock-colored.svg'}/>
                    <select className={`pl-2 text-base w-full bg-white `} name={"Time"}
                            placeholder={"E-mailadres"} onChange={handleTimeChange} value={groupId}>
                        <option value="DEFAULT" selected disabled>Tijdstip</option>
                        {times}
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
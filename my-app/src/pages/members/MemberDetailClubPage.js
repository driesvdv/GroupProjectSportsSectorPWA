import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";

function MemberDetailClubPage(props) {
    let {memberId, registrationId} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [registration, setRegistration] = useState({});
    const [group, setGroup] = useState({name: 'groepsnaam'});
    const [sportclub, setSportclub] = useState({name: 'sportclub'})
    const [sport, setSport] = useState({name: 'sport'})

    useEffect(() => {
        axiosInstance.get(`/registrants/${memberId}/registrations/${registrationId}`)
            .then(function (response) {
                // handle success
                console.log(Object.values(response.data)[0])
                setIsLoaded(true);
                setRegistration(Object.values(response.data)[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoaded(true);
                setError(error);
            })
    }, [])

    useEffect(() => {
        axiosInstance.get(`/group/${registration.group_id}`)
            .then(function (response) {
                // handle success
                console.log(Object.values(response.data)[0])
                setIsLoaded(true);
                let group = Object.values(response.data)[0]
                setGroup(group);
                setSportclub(group.sportclub)
                setSport(group.sportclub.sport)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoaded(true);
                setError(error);
            })
    }, [registration])

    return (
        <div className={"w-2/3 mx-auto mt-20 font-montserrat"}>
            <PageHeader Link={`/leden/${memberId}`}
                        Title={sportclub.name}
                        SubTitle={group.name}/>
            <p className={"text-2xl font-medium"}>Overzicht</p>
            <div className={"max-w-lg font-normal"}>
                <div className={"flex justify-between"}>
                    <p>Sport</p>
                    <p>{sport.name}</p>
                </div>
                <div className={"flex justify-between"}>
                    <p>Start Datum</p>
                    <p>21/03/1998</p>
                </div>
                <div className={"flex justify-between"}>
                    <p>Betaling</p>
                    {registration.has_paid ? (
                        <img src={process.env.PUBLIC_URL + '/assets/approved.svg'}/>
                    ) : (
                        <img src={process.env.PUBLIC_URL + '/assets/rejected.svg'}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MemberDetailClubPage;
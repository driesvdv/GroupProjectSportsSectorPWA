import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";
import SessionCard from "../../components/members/SessionCard";
import SessionLoadingCard from "../../components/members/SessionLoadingCard";
import SessionSelectorCard from "../../components/members/SessionSelectorCard";


function MemberDetailClubPage(props) {
    let {memberId, clubId} = useParams();
    const [registration, setRegistration] = useState(props.location.aboutProps?.registration);
    const [sessions, setSessions] = useState([])
    const [selectedSession, setSelectedSession] = useState(undefined)
    //const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/registrants/${memberId}/registrations/${clubId}`)
            .then(function ({data}) {
                setRegistration(data.data)
            })
            .catch((error) => {
                console.log(error);
                //setError(error);
            })
    }, [memberId, clubId])

    useEffect(() => {
        if (registration) {
            axiosInstance.get(`/sportsessions/${registration.group_id}`).then(({data}) => {
                setSessions(data.data)
            }).catch((e) => {
                console.log(e)
            }).finally(() => {
                setIsLoaded(true)
            })
        }
    }, [registration])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={`/leden/${memberId}`}
                            title={registration?.club.name}
                            subtitle={registration?.group.name}/>
            </div>
            <div className={"mt-40"}>
                {isLoaded ? sessions.map((session, index) => (
                    <SessionCard key={index} session={session} setSelectedSession={setSelectedSession} selectedSession={selectedSession}/>)) : (
                    <Fragment>
                        <SessionLoadingCard/>
                        <SessionLoadingCard/>
                        <SessionLoadingCard/>
                        <SessionLoadingCard/>
                    </Fragment>
                )}
            </div>
            {
                selectedSession && (<SessionSelectorCard session={selectedSession} registrantId={registration.registrant_id} sessionId={selectedSession?.id}/> )
            }
        </div>
    );
}

export default MemberDetailClubPage;

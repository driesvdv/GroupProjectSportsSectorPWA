import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import moment from "moment";
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
    const [group, setGroup] = useState();
    const [sportclub, setSportclub] = useState()
    const [sport, setSport] = useState()

    useEffect(() => {
        if (selectedSession){
            axiosInstance.get(`/registrants/${memberId}/registrations/${selectedSession?.group_id}`)
                .then(function ({data}) {
                    setRegistration(data.data)
                })
                .catch((error) => {
                    console.log(error);
                    //setError(error);
                })
        }
    }, [memberId, selectedSession])

    useEffect(() => {
        axiosInstance.get(`/club/${clubId}`)
            .then(function ({data}) {
                setSportclub(data.data)
                setSport(data.data.sport)
            })
            .catch((error) => {
                console.log(error);
                //setError(error);
            })
    }, [clubId])

    useEffect(() => {
        if (registration) {
            axiosInstance.get(`/sportsessions/${registration.group_id}`).then(({data}) => {
                console.log(data.data)
                setSessions(data.data)
            }).catch((e) => {
                console.log(e)
            }).finally(() => {
                setIsLoaded(true)
            })
        }
    }, [registration])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5 flex"}>
            <div>
                <PageHeader link={`/leden/${memberId}`}
                            title={registration?.club.name}
                            subtitle={registration?.group.name}/>
            </div>
            <div className={'flex mt-40 lg:flex-row-reverse flex-col'}>
                <div>
                    <p className={"text-2xl font-medium"}>Overzicht</p>
                    <div className={"max-w-lg font-normal font-montserrat text-sm"}>
                        <div className={"flex justify-between"}>
                            <p>Sport</p>
                            <p>{sport?.name}</p>
                        </div>
                        <div className={"flex justify-between"}>
                            <p>Inschrijvingsdatum</p>
                            <p>{moment(registration?.created_at).format("DD/MM/YYYY")}</p>
                        </div>
                        <div className={"flex justify-between"}>
                            <p>Betaling</p>
                            {registration?.has_paid ? (
                                <img src={process.env.PUBLIC_URL + '/assets/approved.svg'}/>
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/rejected.svg'}/>
                            )}
                        </div>
                    </div>
                </div>
                <div>
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
                    selectedSession && (<SessionSelectorCard session={selectedSession} registrantId={registration?.registrant_id} sessionId={selectedSession?.id}/> )
                }
            </div>
        </div>
    );
}

export default MemberDetailClubPage;

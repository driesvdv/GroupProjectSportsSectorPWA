import React, { Fragment, useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import moment from "moment";
import axiosInstance from "../../services/axios.service";
import SessionCard from "../../components/members/SessionCard";
import SessionLoadingCard from "../../components/members/SessionLoadingCard";
import SessionSelectorCard from "../../components/members/SessionSelectorCard";
import ErrorCard from "../../components/members/ErrorCard";


function MemberDetailClubPage(props) {
    let { memberId, clubId } = useParams();
    const [registration, setRegistration] = useState(props.location.aboutProps?.registration);
    const [sessions, setSessions] = useState([])
    const [selectedSession, setSelectedSession] = useState(undefined)
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sport, setSport] = useState()
    const history = useHistory()

    useEffect(() => {
        setError(false)
        if (selectedSession && memberId) {
            axiosInstance.get(`/registrants/${memberId}/registrations/${selectedSession?.group_id}`)
                .then(function ({ data }) {
                    setRegistration(data.data)
                })
                .catch((error) => {
                    setError(error.message);
                })
        }
    }, [memberId, selectedSession])

    useEffect(() => {
        setError(false)
        axiosInstance.get(`/club/${clubId}`)
            .then(function ({ data }) {
                setSport(data.data.sport)
            })
            .catch((error) => {
                setError(error.message);
            })
    }, [clubId])

    useEffect(() => {
        setError(false)
        if (registration) {
            axiosInstance.get(`/sportsessions/${registration.group_id}`).then(({ data }) => {
                setSessions(data.data)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoaded(true)
            })
        } else {
            history.push(`/leden/${memberId}`)
        }
    }, [registration, memberId, history])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5 lg:w-4/5 flex"}>
            <div>
                <PageHeader link={`/leden/${memberId}`}
                    title={registration?.club.name}
                    subtitle={registration?.group.name} />
            </div>
            <div className={'w-full flex mt-40 lg:flex-row-reverse lg:justify-between flex-col'}>
                <div className={"lg:ml-10 lg:w-64"}>
                    <p className={"text-2xl font-medium"}>Overzicht</p>
                    <div className={"font-normal font-montserrat text-sm"}>
                        <div className={"flex justify-between"}>
                            <p>Sport</p>
                            <p>{sport?.name}</p>
                        </div>
                        <div className={"flex justify-between"}>
                            <p>Start datum</p>
                            <p>{moment(registration?.created_at).format("DD/MM/YYYY")}</p>
                        </div>
                        <div className={"flex justify-between"}>
                            <p>Betaling</p>
                            {registration?.has_paid ? (
                                <img src={process.env.PUBLIC_URL + '/assets/approved.svg'} alt={"approved"}/>
                            ) : (
                                <img src={process.env.PUBLIC_URL + '/assets/rejected.svg'} alt={"rejected"}/>
                            )}
                        </div>
                    </div>
                    {
                        selectedSession && (<SessionSelectorCard session={selectedSession} registrantId={registration?.registrant_id} registrationId={registration?.id} sessionId={selectedSession?.id} />)
                    }
                </div>
                <div className={"flex flex-col md:min-w-1/2 lg:min-w-3/4 mb-14"}>
                    <div>
                        {isLoaded ? sessions.map((session, index) => (
                            <SessionCard key={index} session={session} setSelectedSession={setSelectedSession} selectedSession={selectedSession} />)) : (
                            <Fragment>
                                <SessionLoadingCard />
                                <SessionLoadingCard />
                                <SessionLoadingCard />
                                <SessionLoadingCard />
                            </Fragment>
                        )}
                        {error && (<ErrorCard error={error}/> )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MemberDetailClubPage;

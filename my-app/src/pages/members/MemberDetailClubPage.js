import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";

function MemberDetailClubPage(props) {
    let {memberId, clubId} = useParams();
    const [registration, setRegistration] = useState(props.location.aboutProps?.registration);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/registrants/${memberId}/registrations/${clubId}`)
            .then(function ({data}) {
                setRegistration(data.data)
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            }).finally(() => {
            setIsLoaded(true)
        })
    }, [])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={`/leden/${memberId}`}
                            title={registration?.club.name}
                            subtitle={registration?.group.name}/>
                {/*<p className={"text-2xl font-medium"}>Overzicht</p>*/}
                {/*<div className={"max-w-lg font-normal"}>*/}
                {/*    <div className={"flex justify-between"}>*/}
                {/*        <p>Sport</p>*/}
                {/*        <p>{sport.name}</p>*/}
                {/*    </div>*/}
                {/*    <div className={"flex justify-between"}>*/}
                {/*        <p>Start Datum</p>*/}
                {/*        <p>21/03/1998</p>*/}
                {/*    </div>*/}
                {/*    <div className={"flex justify-between"}>*/}
                {/*        <p>Betaling</p>*/}
                {/*        {registration?.has_paid ? (*/}
                {/*            <img src={process.env.PUBLIC_URL + '/assets/approved.svg'} alt={"Approved"}/>*/}
                {/*        ) : (*/}
                {/*            <img src={process.env.PUBLIC_URL + '/assets/rejected.svg'} alt={"Rejected"}/>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default MemberDetailClubPage;

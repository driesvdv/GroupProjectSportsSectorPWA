import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MemberRegistration from "../../components/members/MemberRegistration";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";

function MemberDetailClubAddPage(props) {
    let {memberId} = useParams();

    const [registrant, setRegistrant] = useState(props.location.aboutProps?.registrant);

    useEffect(() => {
        axiosInstance
            .get('/registrants/' + memberId)
            .then(({data}) => {
                setRegistrant(data.data)
            }).catch(e => {
            console.log(e)
        })
    }, [memberId])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={`/leden/${memberId}`}
                            title={registrant?.full_name}
                            subtitle={'Toevoegen aan club'}/>
            </div>
            <MemberRegistration/>
        </div>
    );
}

export default MemberDetailClubAddPage;

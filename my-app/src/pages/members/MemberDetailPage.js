import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axiosInstance from "../../services/axios.service";
import moment from "moment";
import PageHeader from "../../components/PageHeader";
import MemberList from "../../components/members/MemberList";
import PlusLink from "../../components/PlusLink";

function MemberDetailPage(props) {
    let {memberId} = useParams();

    const [registrant, setRegistrant] = useState(props.location.aboutProps?.registrant);

    useEffect(() => {
        axiosInstance
            .get('/registrants/' + memberId)
            .then(({data}) => {
                setRegistrant(data.data)
            })
    }, [memberId])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={`/leden`}
                            title={registrant?.full_name}
                            subtitle={moment(registrant?.birth_date).format("DD/MM/YYYY")}/>
            </div>
            <div className={"mt-40"}>
                <MemberList/>
            </div>
            <PlusLink link={`${memberId}/clubs/add`} registrant={registrant}/>
        </div>
    );
}

export default MemberDetailPage;

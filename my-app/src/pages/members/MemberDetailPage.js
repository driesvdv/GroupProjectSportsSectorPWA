import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axiosInstance from "../../services/axios.service";
import PageHeader from "../../components/PageHeader";
import MemberList from "../../components/members/MemberList";
import PlusLink from "../../components/PlusLink";

function MemberDetailPage(props) {
    let {memberId} = useParams();

    const [registrant, setRegistrant] = useState(props.location.aboutProps?.registrant);
    const [date, setDate] = useState(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        axiosInstance
            .get('/registrants/' + memberId)
            .then(({data}) => {
                setRegistrant(data.data)
            })
    }, [memberId])

    useEffect(() => {
        if (registrant) {
            let temp = registrant.full_name.split(" ")
            if (temp.length > 1) {
                setName(`${temp[0]} ${temp[1].substring(0, 1).toUpperCase()}.`)
            } else {
                setName(temp[0])
            }

            setDate(`${new Date(registrant?.birth_date).getDate()}/${new Date(registrant?.birth_date).getMonth() < 10 ? "0" + new Date(registrant?.birth_date).getMonth() : new Date(registrant?.birth_date).getMonth()}/${new Date(registrant?.birth_date).getFullYear()}`)
        }
    }, [registrant])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={`/leden`}
                            title={name}
                            subtitle={date}
                />
            </div>
            <div className={"mt-40"}>
                <MemberList/>
            </div>
            <PlusLink link={`${memberId}/clubs/add`} registrant={registrant}/>
        </div>
    );
}

export default MemberDetailPage;

import React, {Fragment, useEffect, useState} from 'react';
import MemberCard from '../../components/members/MemberCard';
import axiosInstance from "../../services/axios.service";
import PlusLink from "../../components/PlusLink";
import MemberLoadingCard from "../../components/members/MemberLoadingCard";
import PageHeader from "../../components/PageHeader";
import ErrorCard from "../../components/members/ErrorCard";

function MemberListPage(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axiosInstance.get('/registrants')
            .then(function ({data}) {
                setMembers(data.data);
            })
            .catch(function (error) {
                setError(error.message);
            })
            .finally(() => {
                setIsLoaded(true);
            })
    }, [])

    return (
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <PageHeader title={"Leden"} subtitle={"Overzicht"}/>
            <div className={"mt-40"}>
                {isLoaded ? members.map((member, index) => {
                    return <MemberCard key={index} member={member}/>
                }) : (
                    <Fragment>
                        <MemberLoadingCard/>
                        <MemberLoadingCard/>
                        <MemberLoadingCard/>
                        <MemberLoadingCard/>
                    </Fragment>
                )}
                {error && (<ErrorCard error={error}/> )}
            </div>
            <PlusLink link={"/leden/add"}/>
        </div>
    );
}

export default MemberListPage;

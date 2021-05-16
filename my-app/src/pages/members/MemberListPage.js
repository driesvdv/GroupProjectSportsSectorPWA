import React, {useEffect, useState} from 'react';
import MemberCard from '../../components/MemberCard';
import axiosInstance from "../../services/axios.service";
import moment from 'moment'
import PlusLink from "../../components/PlusLink";

function MemberListPage(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [members, setMembers] = useState([]);
    useEffect(() => {
        axiosInstance.get('/registrants')
            .then(function (response) {
                // handle success
                //console.log(Object.values(response.data)[0])
                setIsLoaded(true);
                setMembers(Object.values(response.data)[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoaded(true);
                setError(error);
            })
    }, [])
    return (
        <div className={"w-2/3 mx-auto mt-20"}>
            <p className={"text-blue-dark font-montserrat text-3xl"}>Leden</p>
            <div className={"ml-4"}>
                {members.map((member, index) => {
                    return <MemberCard key={index} member={member} />
                })}
            </div>
            <PlusLink link={"/leden/add"}/>
        </div>
    );
}

export default MemberListPage;
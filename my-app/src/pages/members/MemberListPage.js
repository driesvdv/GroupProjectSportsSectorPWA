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
        let config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
            }
        }
        axiosInstance.get('/registrants', config)
            .then(function ({data}) {
                setMembers(data.data);
                setIsLoaded(true);
            })
            .catch(function (error) {
                console.log(error);
                setError(error);
                setIsLoaded(true);
            })
    }, [])

    return (
        <div className={"w-2/3 mx-auto mt-20 "}>
            <p className={"text-blue-dark font-montserrat text-3xl pb-4"}>Leden</p>
            <div className={"ml-4 px-4 overflow-y-auto max-h-96"}>
                {members.map((member, index) => {
                    return <MemberCard key={index} member={member}/>
                })}
            </div>
            <PlusLink link={"/leden/add"}/>
        </div>
    );
}

export default MemberListPage;

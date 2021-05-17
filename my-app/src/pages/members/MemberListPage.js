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
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <p className={"text-blue-dark font-montserrat font-bold space-y-4 text-3xl pb-4"}>Leden</p>
            <div>
                {members.map((member, index) => {
                    return <MemberCard key={index} member={member}/>
                })}
            </div>
            <PlusLink link={"/leden/add"}/>
        </div>
    );
}

export default MemberListPage;

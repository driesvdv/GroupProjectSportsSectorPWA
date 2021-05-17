import React, {useState, useEffect} from 'react';
import axiosInstance from "../../services/axios.service";
import {useParams} from "react-router-dom";
import RegistrationCard from "./RegistrationCard";

const MemberList = () => {
    let {memberId} = useParams();

    const [registrations, setRegistrations] = useState(null);

    useEffect(() => {
        axiosInstance
            .get('/registrants/' + memberId + "/registrations")
            .then(({data}) => {
                setRegistrations(data.data)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            {registrations?.map((registration, index) => {
                return <RegistrationCard key={index} registration={registration}/>
            })}
        </div>
    );
};

export default MemberList;
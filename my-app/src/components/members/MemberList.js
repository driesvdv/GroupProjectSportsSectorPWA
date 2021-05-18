import React, {useState, useEffect, Fragment} from 'react';
import axiosInstance from "../../services/axios.service";
import {useParams} from "react-router-dom";
import RegistrationCard from "./RegistrationCard";
import RegistrationLoadingCard from "./RegistrationLoadingCard";

const MemberList = () => {
        let {memberId} = useParams();
        const [isLoaded, setLoading] = useState(false)
        const [registrations, setRegistrations] = useState(null);

        useEffect(() => {
            axiosInstance
                .get('/registrants/' + memberId + "/registrations")
                .then(({data}) => {
                    setRegistrations(data.data)
                })
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(true)
                })
        }, [])

        return (
            <div>
                {isLoaded ? registrations?.map((registration, index) => {
                    return <RegistrationCard key={index} registration={registration}/>
                }) : (
                    <Fragment>
                        <RegistrationLoadingCard/>
                        <RegistrationLoadingCard/>
                        <RegistrationLoadingCard/>
                    </Fragment>
                )}
            </div>
        );
    }
;

export default MemberList;

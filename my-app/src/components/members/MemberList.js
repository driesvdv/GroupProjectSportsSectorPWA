import React, {useState, useEffect, Fragment} from 'react';
import axiosInstance from "../../services/axios.service";
import {useParams} from "react-router-dom";
import RegistrationCard from "./RegistrationCard";
import RegistrationLoadingCard from "./RegistrationLoadingCard";
import ErrorCard from "./ErrorCard";

const MemberList = () => {
    let {memberId} = useParams();
    const [isLoaded, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [registrations, setRegistrations] = useState(null);

    useEffect(() => {
        setError(false)
        axiosInstance
            .get('/registrants/' + memberId + "/registrations")
            .then(({data}) => {
                setRegistrations(data.data)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(true)
            })
    }, [memberId])

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
            {error && (<ErrorCard error={error}/>)}
        </div>
    );
};

export default MemberList;

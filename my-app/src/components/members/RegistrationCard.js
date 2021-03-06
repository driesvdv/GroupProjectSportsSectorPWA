import React from 'react';
import {Link, useParams} from "react-router-dom";

const RegistrationCard = ({registration}) => {
    let {memberId} = useParams();

    return (
        <div className={'md:ml-12'}>
            <Link
                to={{
                    pathname: `/leden/${memberId}/clubs/${registration.club.id}`,
                    aboutProps: {
                        registration: registration
                    }
                }}
                className={"border-gray p-2 h-26 mx-auto shadow flex justify-between my-5 z-30 rounded-lg hover:shadow-dark bg-white"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{registration.club.name}</p>
                    <p className={"text-base text-green font-normal"}>{registration.group.name}</p>
                </div>
                <div className={"flex flex-col justify-center mr-4"}>
                    <img src={process.env.PUBLIC_URL + '/assets/chevron-right.svg'} alt={"arrow"}/>
                </div>
            </Link>
        </div>
    );
};

export default RegistrationCard;

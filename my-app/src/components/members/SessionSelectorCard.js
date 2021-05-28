import React, {useEffect, useState} from 'react';
import SwitchSelector from "react-switch-selector";
import axiosInstance from "../../services/axios.service";
import moment from "moment";
import 'moment/locale/nl'

moment.locale("nl")

function SessionSelectorCard({session, registrantId, sessionId, registrationId}) {
    const [selectedIndex, setSelectedIndex] = useState(undefined)
    const [isLoaded, setIsLoaded] = useState(false)

    const options = [
        {
            label: <p className={"text-base text-white"}>Aanwezig</p>,
            value: "aanwezig",
            selectedBackgroundColor: "#1A936F",
        },
        {
            label: <p className={"text-base text-white"}>Afwezig</p>,
            value: "afwezig",
            selectedBackgroundColor: "#1A936F"
        }
    ];

    const onChange = (newValue) => {
        if (newValue === "aanwezig") {
            axiosInstance.delete(`/sportsessions/${session.id}/absentsessions/${registrationId}`)
                .catch(err => {
                    console.log(err)
                }
            )
        } else if (newValue === "afwezig") {
            axiosInstance.post(`/sportsessions/${session.id}/absentsessions`, {
                registration_id: registrationId,
                sport_session_id: session.id
            }).catch(error => {
                    console.log(error)
                }
            )
        }
    };

    useEffect(() => {
        setIsLoaded(false)
        axiosInstance.get(`/sportsessions/${sessionId}/registrations/${registrationId}/isabsent`)
            .then(({data}) => {
                console.log(data ? "afwezig" : "aanwezig")        // true is afwezig, false is aanwezig
                setSelectedIndex(data ? 1 : 0)              // 1 is afwezig, 0 is aanwezig
            })
            .finally(() => {
                setIsLoaded(true)
            })
    }, [sessionId, registrationId])

    useEffect(() => {
        console.log(selectedIndex)
    }, [selectedIndex])

    return (
        <div className={'mt-10'}>
            <p>Sportsessie</p>
            <div className={"border-gray p-2 mx-auto shadow my-5 rounded-lg bg-white mouse-pointer"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{moment(session?.start_time).format("LL")}</p>
                    <p className={"text-base text-green font-normal"}>{`${moment(session?.start_time).format("LT")} - ${moment(session?.end_time).format("LT")}`}</p>
                </div>
                {isLoaded ? (
                    <div className={"h-10 w-60 mt-3 mr-20"}>
                        <SwitchSelector
                            onChange={onChange}
                            options={options}
                            initialSelectedIndex={selectedIndex}
                            backgroundColor={"#114B5F"}
                            fontColor={"#ffffff"}
                        />
                    </div>
                ) : (
                    <div className={"h-10 w-60 mt-3 mr-20 animate-pulse bg-grey rounded-3xl"}/>
                )}
            </div>
        </div>
    );
}

export default SessionSelectorCard;

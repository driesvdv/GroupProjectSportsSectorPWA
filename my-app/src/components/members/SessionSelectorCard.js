import React, {useEffect, useState} from 'react';
import SwitchSelector from "react-switch-selector";
import axiosInstance from "../../services/axios.service";

function SessionSelectorCard({session, registrantId, sessionId}) {
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    const startTime = new Date(session?.start_time)
    const endTime = new Date(session?.end_time)
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
            console.log("op aanwezig zetten...")
            axiosInstance.delete(`/sportsessions/${session.id}/absentsessions/${registrantId}`)
                .then((resp) => {
                    console.log(resp)
                }).catch(err => {
                    console.log(err)
                }
            )
        } else if (newValue === "afwezig") {
            console.log("op afwezig zetten...")
            axiosInstance.post(`/sportsessions/${session.id}/absentsessions`, {
                registration_id: registrantId,
                sport_session_id: session.id
            }).then(resp => {
                    console.log(resp)
                }).catch(error => {
                    console.log(error)
                }
            )
        }
    };

    useEffect(() => {
            setIsLoaded(false)
            axiosInstance.get(`/sportsessions/${sessionId}/isabsent`).then(({data}) => {
                //console.log(data)                       // true is afwezig, false is aanwezig
                setSelectedIndex(data ? 1 : 0)    // 1 is afwezig, 0 is aanwezig
            }).finally(() => {
                setIsLoaded(true)
            })
    }, [sessionId])

    useEffect(() => {
        console.log(selectedIndex)
    }, [selectedIndex])

    return (
        <div className={'md:ml-12 mt-10'}>
            <p>Sportsessie</p>
            <div className={"border-gray p-2 mx-auto shadow my-5 z-30 rounded-lg bg-white mouse-pointer"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{`${startTime.getDate()} ${months[startTime.getMonth() - 1]} ${startTime.getFullYear()}`}</p>
                    <p className={"text-base text-green font-normal"}>{`${startTime.getHours()}u${startTime.getMinutes() < 10 ? "0" + startTime.getMinutes() : startTime.getMinutes()} - ${endTime.getHours()}u${endTime.getMinutes() < 10 ? "0" + endTime.getMinutes() : endTime.getMinutes()}`}</p>
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

import React, {useEffect, useState} from 'react';
import SwitchSelector from "react-switch-selector";
import axiosInstance from "../../services/axios.service";

function SessionSelectorCard({session}) {
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    const startTime = new Date(session?.start_time)
    const endTime = new Date(session?.end_time)
    const [isLoaded, setIsLoaded] = useState(false)

    const options = [
        {
            label: <p className={"text-base text-white"}>Aanwezig</p>,
            value: true,
            selectedBackgroundColor: "#1A936F",
        },
        {
            label: <p className={"text-base text-white"}>Afwezig</p>,
            value: false,
            selectedBackgroundColor: "#1A936F"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    useEffect(() => {
        axiosInstance.get(`/sportsessions/${session.id}/isabsent`).then(({data}) => {
            console.log(data)
        }).finally(() => {setIsLoaded(true)})
    }, [])

    const initialSelectedIndex = options.findIndex(({value}) => value === false);

    return (
        <div className={'md:ml-12 mt-10'}>
            <p>Sportsessie</p>
            <div className={"border-gray p-2 mx-auto shadow my-5 z-30 rounded-lg bg-white mouse-pointer"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{`${startTime.getDate()} ${months[startTime.getMonth() - 1]} ${startTime.getFullYear()}`}</p>
                    <p className={"text-base text-green font-normal"}>{`${startTime.getHours()}u${startTime.getMinutes()} - ${endTime.getHours()}u${endTime.getMinutes()}`}</p>
                </div>
                {isLoaded ? (
                    <div className={"h-10 w-60 mt-3 mr-20"}>
                        <SwitchSelector
                            onChange={onChange}
                            options={options}
                            initialSelectedIndex={initialSelectedIndex}
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

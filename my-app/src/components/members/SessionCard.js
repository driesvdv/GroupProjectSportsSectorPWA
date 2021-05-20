import React from 'react';

function SessionCard({session, setSelectedSession, selectedSession}) {
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    const startTime = new Date(session?.start_time)
    const endTime = new Date(session?.end_time)

    const clickSession = () => {
        if (selectedSession?.id === session.id) {
            setSelectedSession(undefined)
        } else {
            setSelectedSession(session)
        }
    }

    return (
        <div className={'md:ml-12'}>
            <div onClick={clickSession} className={"border-gray p-2 mx-auto shadow flex justify-between my-5 z-30 rounded-lg hover:shadow-dark bg-white mouse-pointer"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{`${startTime.getDate()} ${months[startTime.getMonth() - 1]} ${startTime.getFullYear()}`}</p>
                    <p className={"text-base text-green font-normal"}>{`${startTime.getHours()}u${startTime.getMinutes() < 10 ? "0" + startTime.getMinutes() : startTime.getMinutes()} - ${endTime.getHours()}u${endTime.getMinutes() < 10 ? "0" + endTime.getMinutes() : endTime.getMinutes()}`}</p>
                </div>
                <div className={"flex flex-col justify-center mr-4"}>
                    <img src={process.env.PUBLIC_URL + '/assets/info.svg'} alt={"info"}/>
                </div>
            </div>
        </div>
    );
}

export default SessionCard;

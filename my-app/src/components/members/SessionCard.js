import React from 'react';
import 'moment/locale/nl'
import moment from "moment"

moment.locale("nl")


function SessionCard({session, setSelectedSession, selectedSession}) {
    const clickSession = () => {
        if (selectedSession?.id === session.id) {
            setSelectedSession(undefined)
        } else {
            setSelectedSession(session)
        }
    }

    return (
        <div className={'lg:ml-16 xl:ml-12'}>
            <div onClick={clickSession} className={"border-gray p-2 mx-auto shadow flex justify-between my-5 z-30 rounded-lg hover:shadow-dark bg-white mouse-pointer"}>
                <div className={"pb-2"}>
                    <p className={"font-montserrat font-medium text-lg"}>{moment(session?.start_time).format("LL")}</p>
                    <p className={"text-base text-green font-normal"}>{`${moment(session?.start_time).format("LT")} - ${moment(session?.end_time).format("LT")}`}</p>
                </div>
                <div className={"flex flex-col justify-center mr-4"}>
                    <img src={process.env.PUBLIC_URL + '/assets/info.svg'} alt={"info"} />
                </div>
            </div>
        </div>
    );
}

export default SessionCard;

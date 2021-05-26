import React from 'react';

function SessionLoadingCard(props) {
    return (
        <div className={'animate-pulse md:ml-12'}>
            <div className={"border-gray p-2 mx-auto shadow flex justify-between my-5 z-30 rounded-lg bg-white"}>
                <div className={"pb-2"}>
                    <div className={"h-6 w-36 bg-grey rounded-md mt-2"}/>
                    <div className={"flex"}>
                        <div className={"h-6 w-12 bg-grey rounded-md mt-2"}/>
                        <div className={"h-6 ml-2 w-12 bg-grey rounded-md mt-2"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SessionLoadingCard;

import React from 'react';

function RegistrationLoadingCard() {
    return (
        <div className={'md:ml-12'}>
            <div className={"border-gray p-2 mx-auto shadow flex justify-between my-5 h-26 z-30 rounded-lg bg-white animate-pulse"}>
                <div className={"pb-2"}>
                    <div className={"w-36 h-6 bg-grey mt-2 rounded-md"}/>
                    <div className={"w-12 h-5 bg-grey mt-2 rounded-md"}/>
                </div>
            </div>
        </div>
    );
}

export default RegistrationLoadingCard;

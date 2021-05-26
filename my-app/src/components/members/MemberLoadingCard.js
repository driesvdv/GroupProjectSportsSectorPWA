import React from 'react';

function MemberLoadingCard() {
    return (
        <div className={'animate-pulse md:ml-12'}>
            <div className={"border-gray p-2 mx-auto shadow flex justify-between my-5 z-30 rounded-lg bg-white"}>
                <div className={"pb-2"}>
                    <div className={"h-6 w-40 bg-grey rounded-md mt-2"}/>
                    <div className={"h-6 w-20 bg-grey rounded-md mt-2"}/>
                </div>
            </div>
        </div>
    );
}

export default MemberLoadingCard;

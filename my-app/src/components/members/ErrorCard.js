import React from 'react';

function ErrorCard({error}) {
    return (
        <div className={'md:ml-12'}>
            <div className={"border-gray p-2 mx-auto shadow flex justify-between my-5 h-26 z-30 rounded-lg bg-white"}>
                <div className={"ml-2 py-2"}>
                    <p className={"text-base text-red"}>Error: {error}</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorCard;

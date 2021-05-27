import React from 'react';

function ErrorFormCard({error}) {
    return (
        <div className={"py-4 bg-white rounded-xl"}>
            <p className={"text-base text-red"}>Error: {error}</p>
        </div>    );
}

export default ErrorFormCard;

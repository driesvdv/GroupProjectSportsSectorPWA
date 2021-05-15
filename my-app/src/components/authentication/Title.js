import React from 'react';

function Title({text}) {
    return (
        <h1 className={"text-xl text-blue-dark font-medium lg:text-3xl font-montserrat mb-8 mt-10 lg:mt-0"}>{text}</h1>
    );
}

export default Title;
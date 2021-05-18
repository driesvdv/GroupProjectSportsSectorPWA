import React from 'react';
import {Link} from "react-router-dom";

function PlusLink({link, registrant}) {
    return (
        <Link to={{
            pathname: link,
            aboutProps: {
                registrant: registrant
            }
        }}
              className="transition duration-200 ease-in-out bottom-0 right-0 fixed z-20 rounded-full mr-8 mb-8 cursor-pointer hover:shadow-dark">
            <img src={process.env.PUBLIC_URL + '/assets/toevoegen-knop.svg'} alt={"Add"}/>
        </Link>
    );
}

export default PlusLink;

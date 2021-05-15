import React from 'react';

function NavBar(props) {
    return (
        <div className={"bg-white-light w-64 shadow-lg space-y-6"}>
            <a href="/leden" class="flex flex-items-center">
                <div className={"pr-2"}>
                    <img className={"w-11 h-11"}
                         src={process.env.PUBLIC_URL + '/assets/logo.svg'}
                         alt={"sport plus logo"}/>
                </div>
                <span className="text-3xl font-bold">Sport +</span>
            </a>
            <nav className={"text-lg"}>
                <a href="" className="block py-2 5 px-4 flex flex-items-center space-x-3">
                    <img className={"w-7 h-7"}
                         src={process.env.PUBLIC_URL + '/assets/users.svg'}
                         alt={"sport plus logo"}/>
                    <span>Leden</span>
                </a>
                <a href="" className="block py-2 5 px-4 flex flex-items-center space-x-3">
                    <img className={"w-7 h-7"}
                         src={process.env.PUBLIC_URL + '/assets/user plus.svg'}
                         alt={"sport plus logo"}/>
                    <span>Voeg lid toe</span>
                </a>
                <a href="" className="block py-2 5 px-4 flex flex-items-center space-x-3">
                    <img className={"w-7 h-7"}
                         src={process.env.PUBLIC_URL + '/assets/+.svg'}
                         alt={"sport plus logo"}/>
                    <span>Voeg groep toe</span>
                </a>
                <a href="" className="block py-2 5 px-4 flex flex-items-center space-x-3">
                    <img className={"w-7 h-7"}
                         src={process.env.PUBLIC_URL + '/assets/home.svg'}
                         alt={"sport plus logo"}/>
                    <span>Zie inschrijvingen</span>
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
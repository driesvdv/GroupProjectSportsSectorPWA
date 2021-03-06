import React from 'react';
import AuthService from "../services/authentication.service";
import {useHistory} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

function NavBar(props) {
    const history = useHistory()

    const toggleSidebar = (e) => {
        e.preventDefault()
        document.querySelector(".sidebar").classList.toggle("-translate-x-full");
    }

    const logout = (e) => {
        e.preventDefault()
        AuthService.logout(history);
    }

    return (
        <div className={"flex"}>
            <div className={"md:hidden z-20"}>
                <div onClick={toggleSidebar} className="fixed p-6 pt-8">
                    <div className={"pr-2"}>
                        <img className={"w-7 h-7"}
                             src={process.env.PUBLIC_URL + '/assets/hamburger.svg'}
                             alt={"Hamburger button"}/>
                    </div>
                </div>
            </div>
            <div
                className={"sidebar z-20 bg-white-light w-64 shadow-lg space-y-6 px-3 py-7 fixed h-screen inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"}>
                <div className={"flex justify-between"}>
                    <Link to="/leden" className="flex flex-items-center px-2">
                        <div className={"pr-2"}>
                            <img className={"w-11 h-11"}
                                 src={process.env.PUBLIC_URL + '/assets/logo.svg'}
                                 alt={"sport plus logo"}/>
                        </div>
                        <span className="text-2xl font-bold">Sport +</span>
                    </Link>
                    <div onClick={toggleSidebar} className="block p-2 md:invisible">
                        <img className={"w-8 h-8"}
                             src={process.env.PUBLIC_URL + '/assets/x.svg'}
                             alt={"sport plus logo"}/>
                    </div>
                </div>


                <nav className={"text-lg"}>
                    <NavLink exact to="/leden"
                             className="block py-2 5 px-4 flex flex-items-center space-x-3 hover:bg-grey rounded-md transition duration-200"
                             activeClassName={"bg-grey"}>
                        <img className={"w-7 h-7"}
                             src={process.env.PUBLIC_URL + '/assets/users.svg'}
                             alt={"sport plus logo"}/>
                        <span>Leden</span>
                    </NavLink>
                    <NavLink exact to="/leden/add"
                             className="block py-2 5 px-4 flex flex-items-center space-x-3 hover:bg-grey rounded-md transition duration-200"
                             activeClassName={"bg-grey"}>
                        <img className={"w-7 h-7"}
                             src={process.env.PUBLIC_URL + '/assets/user plus.svg'}
                             alt={"sport plus logo"}/>
                        <span>Voeg lid toe</span>
                    </NavLink>
                </nav>
                <div className={"text-lg fixed inset-x-0 bottom-0 px-3 py-3"}>
                    <div onClick={logout}
                       className="block py-2 5 px-4 flex flex-items-center space-x-3 hover:bg-grey rounded-md transition duration-200">
                        <img className={"w-7 h-7"}
                             src={process.env.PUBLIC_URL + '/assets/log out.svg'}
                             alt={"sport plus logo"}/>
                        <span>Uitloggen</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

import React, {useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";


function MemberAddPage(props) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        birth_date: "",
        max_registrations: 10
    })
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        axiosInstance.post("/registrants", formData)
            .then(({data}) => {
                history.push("/leden")
            })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]: value}))
    }


    return (
        <div className={"w-2/3 mx-auto mt-20"}>
            <PageHeader Link={'/leden'} Title={'Leden'} SubTitle={'Toevoegen'}/>

            <form className={"p-2 my-5"} onSubmit={e => { handleSubmit(e) }}>
                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/user.svg'}/>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='first_name'
                        type='text'
                        placeholder='Voornaam'
                        onChange={handleChange}
                    />
                </div>

                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/user.svg'}/>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='last_name'
                        type='text'
                        placeholder='Achternaam'
                        onChange={handleChange}
                    />
                </div>
                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/pen.svg'}/>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='max_registrations'
                        type='number'
                        placeholder='Max. inschrijvingen'
                        onChange={handleChange}
                    />
                </div>

                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/calendar.svg'}/>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='birth_date'
                        type='date'
                        placeholder='Geboortedatum'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className={
                            "bg-blue text-white font-bold text-lg px-10 h-16 rounded-full max-w-md cursor-pointer"
                        }
                        type='submit'
                        value='Toevoegen'
                    />
                </div>
            </form>
        </div>
    )
}

export default MemberAddPage;
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import axiosInstance from "../../services/axios.service";


function MemberAddPage(props) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        birth_date: ""
    })
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
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
        <div className={"p-10 text-2xl font-bold md:w-3/5"}>
            <div className={"space-y-4"}>
                <PageHeader link={'/leden'} title={'Leden'} subtitle={'Toevoegen'}/>
            </div>
            <div className={"mt-40 flex flex-col md:w-64 md:ml-12 sm:mx-auto"}>
                <form className={"flex flex-col space-y-10"} onSubmit={e => { handleSubmit(e) }}>
                    <div className={"border-b-2 border-gray-dark mt-4 py-1 bg-white flex"}>
                        <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/user.svg'} alt={"user"}/>
                        <input
                            className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                            name='first_name'
                            type='text'
                            placeholder='Voornaam'
                            onChange={handleChange}
                        />
                    </div>

                    <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                        <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/user.svg'} alt={"user"}/>
                        <input
                            className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                            name='last_name'
                            type='text'
                            placeholder='Achternaam'
                            onChange={handleChange}
                        />
                    </div>

                    <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                        <img className={"w-8 h-8"} src={process.env.PUBLIC_URL + '/assets/calendar.svg'} alt={"calendar"}/>
                        <input
                            className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                            name='birth_date'
                            type='date'
                            placeholder='Geboortedatum'
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        className={"rounded-full py-2 text-2xl font-bold text-white bg-blue hover:bg-blue-dark cursor-pointer"}
                        type="submit" value={loading ? "Laden..." : "Toevoegen"} disabled={loading}/>
                </form>
            </div>
        </div>
    )
}

export default MemberAddPage;

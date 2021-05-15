import React from 'react';
import 'boxicons'

function MemberAddPage(props) {
    const handleSubmit = (e) => {
        alert('submitted')
        e.preventDefault();
    }

    return (
        <div className={"w-2/3 mx-auto mt-20"}>
            <div className={"flex"}>
                <div className={"flex-none w-16 h-16"}></div>
                <div className={"border-l-2 p-2 border-gray-dark flex-grow w-32"}>
                    <p className={"text-blue-dark font-montserrat text-3xl font-bold p-1"}>Leden</p>
                    <p className={"text-green font-montserrat font-normal p-1"}>Toevoegen</p>
                </div>
            </div>

            <form className={"p-2 my-5"} onSubmit={e => { handleSubmit(e) }}>
                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <div className={"flex-none w-8 h-8"}></div>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='voornaam'
                        type='text'
                        placeholder='Voornaam'
                    />
                </div>

                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <div className={"flex-none w-8 h-8"}></div>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='achternaam'
                        type='text'
                        placeholder='Achternaam'
                    />
                </div>

                <div className={"border-gray-dark border-b-2 my-4 h-12 flex"}>
                    <div className={"flex-none w-8 h-8"}></div>
                    <input
                        className={"h-full pl-2 text-lg text-blue-dark bg-white flex-grow w-16"}
                        name='geboortedatum'
                        type='text'
                        placeholder='Geboortedatum'
                    />
                </div>
                <div>
                    <input
                        className={
                            "bg-blue text-white font-bold text-lg px-6 h-16 rounded-lg max-w-md cursor-pointer"
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
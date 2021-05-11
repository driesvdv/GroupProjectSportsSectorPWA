import React from 'react';

function MemberAddPage(props) {
    const handleSubmit = (e) => {
        alert('submitted')
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <p>Leden</p>
                <p>Toevoegen</p>
            </div>
            <form onSubmit={e => { handleSubmit(e) }}>

                <input
                    name='voornaam'
                    type='text'
                    placeholder='Voornaam'
                />
                <input
                    name='achternaal'
                    type='text'
                    placeholder='Achternaam'
                />
                <input
                    name='geboortedatum'
                    type='text'
                    placeholder='Geboortedatum'
                />
                <input
                    type='submit'
                    value='Toevoegen'
                />
            </form>
        </div>
    )
}

export default MemberAddPage;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CustomerCreateForm = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const updateFullName= (event) => {
        setFullName(event.target.value);
    }
    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCustomerAdded(fullName, email);
    }

    return <>
        <h1>Créer un client</h1>
        <form onSubmit={handleSubmit} className="fullWidth">
            <div className="fullWidth tinyMargin">
                <input
                    type="text"
                    name="invoice-amount"
                    placeholder="Nom Complet"
                    onChange={updateFullName}
                    value={fullName}
                />
            </div>
            <div className="fullWidth tinyMargin">
                <input
                    type="email"
                    name="invoice-email"
                    placeholder="email"
                    onChange={updateEmail}
                    value={email}
                />
            </div>
            <div className="fullWidth tinyMargin">
                <button type="submit" className="buttonStyle thirdWidth">Enregistrer</button>
            </div>
        </form>
        <Link className="buttonStyle thirdWidth tinyMargin" to={"/"}>
            <div>
                Retour à la liste
            </div>
        </Link>
    </>

}

export default CustomerCreateForm;
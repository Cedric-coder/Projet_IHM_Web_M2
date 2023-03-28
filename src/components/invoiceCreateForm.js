import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const InvoiceCreateForm = (props) => {
    const statusValues = ["Envoyées","Payée"];
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');

    const updateAmount = (event) => {
        setAmount(event.target.value);
    }
    const updateStatus = (event) => {
        if(event.target.value < statusValues.length)
            setStatus(statusValues[event.target.value]);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onInvoiceAdd(amount,status);
    }

    return <>
        <h1>Créer une facture</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="invoice-amount"
                placeholder="Montant de la facture"
                onChange={updateAmount}
                required
                value={amount}
                className="fullWidth tinyMargin"
            />
            <select
                name="invoice-status"
                onChange={updateStatus}
                required
                value={"Envoyées"}
                className="fullWidth tinyMargin"
            >
                <option value="0">{statusValues[0]}</option>
                <option value="1">{statusValues[1]}</option>
            </select>
            <div className="fullWidth tinyMargin">
                <button type="submit" className="buttonStyle thirdWidth">Ajouter</button>
            </div>
        </form> 
        <Link className="thirdWidth buttonStyle tinyMargin" to={"/"}>
            <div>
                Retour à la liste
            </div>
        </Link>
    </>

}

export default InvoiceCreateForm;
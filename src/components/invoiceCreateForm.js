import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const InvoiceCreateForm = (props) => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('Envoyée');

    const updateAmount = (event) => {
        setAmount(event.target.value);
    }
    const updateStatus = (event) => {
        console.log(event.target.value);
        if(event.target.value == "SENT")
            setStatus("Envoyée");
        else setStatus("Payée");
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
                name="amount"
                placeholder="Montant de la facture"
                onChange={updateAmount}
                required
                value={amount}
                className="fullWidth tinyMargin"
            />
            <select
                name="status"
                onChange={updateStatus}
                required
                value={status.value}
                className="fullWidth tinyMargin"
            >
                <option value="SENT">Envoyée</option>
                <option value="PAID">Payée</option>
            </select>
            <div className="fullWidth tinyMargin">
                <button type="submit" className="buttonStyle thirdWidth">Enregistrer la facture</button>
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
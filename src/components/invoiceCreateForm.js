import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CustomerDetail = (props) => {
    const [amount, setText] = useState('');

    const updateText = (event) => {
        // On fait évoluer le state "text" en remplaçant la valeur
        // acutelle par la valeur mise à jour de l'<input>
        setText(event.target.value);
    }
    
    const handleSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();

       // Appelons la fonction onTaskAdded passée en props
       props.onTaskAdded(amount);
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="invoice-text"
            placeholder="Montant de la facture"
            onChange={updateText}
            value={amount}
        />
        <button>Ajouter</button>
    </form>

}

export default CustomerDetail;
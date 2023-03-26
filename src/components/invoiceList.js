import React from "react";
import { Link } from "react-router-dom";


const InvoiceList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => 
            <li className="InvoiceLine" key={item.id}>
            <div className="halfWidth">
                <label className="InvoiceAmount" id={"InvoiceAmount-"+item.id}>
                    {item.amount}€
                </label>
            </div>
            <div className="halfWidth">
                <label className="InvoiceStatus" id={"InvoiceStatus-"+item.id}>
                    {item.status ? "Payée":"Envoyée"}
                </label>
                </div>
            </li>)}
        </ul>
        <div>
            <Link to={"/create"} className="buttonStyle fitContent">
                Créer une facture
            </Link>
        </div>
    </>;
}

export default InvoiceList;
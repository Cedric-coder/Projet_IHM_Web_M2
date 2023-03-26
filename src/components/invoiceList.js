import React from "react";
import { Link } from "react-router-dom";


const InvoiceList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item =>
                <li className="InvoiceLine" key={item.id}>
                    <div className="halfWidth">
                        <label className="InvoiceAmount" id={"InvoiceAmount-" + item.id}>
                            {item.amount}€
                        </label>
                    </div>
                    <div className="halfWidth">
                        <label className="InvoiceStatus" id={"InvoiceStatus-" + item.id}>
                            {item.status ? "Payée" : "Envoyée"}
                        </label>
                    </div>
                </li>)}
        </ul>
        <Link className="buttonStyle fitContent" to={"/create"}>
            <div>
                Créer une facture
            </div>
        </Link>
    </>;
}

export default InvoiceList;
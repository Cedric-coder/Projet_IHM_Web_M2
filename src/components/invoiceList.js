import React from "react";
import { Link, useParams } from "react-router-dom";


const InvoiceList = (props) => {

    const params = useParams();
    console.log(params);
    const id_customer = +params.id_customer;

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
        <Link className="buttonStyle fitContent" to={"/"+id_customer+"/invoices/add"}>
            <div>
                Créer une facture
            </div>
        </Link>
    </>;
}

export default InvoiceList;
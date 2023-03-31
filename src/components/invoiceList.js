import React from "react";
import { Link, useParams } from "react-router-dom";


const InvoiceList = (props) => {

    const params = useParams();
    const id_customer = +params.id_customer;
    return <>
        <table><tbody>
            {props.tasks.map(item =>
                <tr className="InvoiceLine fullWidth" key={item.id}>
                    <th className="halfWidth">
                        <label className="InvoiceAmount" id={"InvoiceAmount-" + item.id}>
                            {item.amount}€
                        </label>
                    </th>
                    <th className="halfWidth">
                        <label className="InvoiceStatus" id={"InvoiceStatus-" + item.id}>
                            {item.status}
                        </label>
                    </th>
                </tr>)}
            </tbody></table>
        <Link className="buttonStyle fitContent" to={"/"+id_customer+"/invoices/add"}>
            <div>
                Créer une facture
            </div>
        </Link>
    </>;
}

export default InvoiceList;
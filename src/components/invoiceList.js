import React from "react";


const InvoiceList = (props) => {
    return <>
        <ul>
            {props.tasks.map(item => <li className="InvoiceLine" key={item.id}>
                <label className="InvoiceAmount" id={"InvoiceAmount-"+item.id}>
                    {item.amount}€
                </label>
                <label className="InvoiceStatus" id={"InvoiceStatus-"+item.id}>
                    {item.status}
                </label>
            </li>)}
        </ul>
    </>;
}

export default InvoiceList;
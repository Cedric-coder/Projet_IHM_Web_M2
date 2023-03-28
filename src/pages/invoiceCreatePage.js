import React, { useEffect, useState } from "react";
import InvoiceCreateForm from "../components/invoiceCreateForm.js";
import { useNavigate } from "react-router-dom";
import {addInvoiceToApi} from "../api/invoicesAPI";
import { useParams } from "react-router-dom";



const InvoiceCreatePage = () => {
    const navigate = useNavigate();

    const params = useParams();
    const id_customer = params.id_customer;

    const addNewInvoice = (amount, status) => {
        // Créons une nouvelle tâche avec le text tapé dans l'input
        const invoice = {
            amount: amount,
            status : status,
            id_customer: id_customer
        };

        addInvoiceToApi(invoice).then((response) => {
            navigate("/"+id_customer);
        }).catch((error) => console.error(error));
    }

    return <>
        <InvoiceCreateForm onInvoiceAdd={addNewInvoice}/>
    </>
}

export default InvoiceCreatePage;
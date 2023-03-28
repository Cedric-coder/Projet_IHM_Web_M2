import React, { useEffect, useState } from "react";
import { loadCustomerFromApi } from "../api/customersAPI";
import { loadInvoiceFromApi} from "../api/invoicesAPI"
import CustomerDetail from "../components/customerDetail";
import CustomerCreateForm from "../components/customerCreateForm.js";
import { useParams } from "react-router-dom";
import {addCustomerToApi} from "../api/customersAPI";
import { useNavigate } from "react-router-dom";



const CustomerCreatePage = () => {
    const navigate = useNavigate();
    const addNewCustomer = (fullName,email) => {
        // Créons une nouvelle tâche avec le text tapé dans l'input
        const customer = {
            fullName: fullName,
            email: email
        };

        addCustomerToApi(customer).then((response) => {
            navigate("/");
        }).catch((error) => console.error(error));
    }

    return <>
        <CustomerCreateForm onCustomerAdded={addNewCustomer}/>
    </>
}

export default CustomerCreatePage;
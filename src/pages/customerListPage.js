import React, { useEffect, useState } from "react";
import { loadCustomersFromApi, addCustomerToApi } from "../api/customersAPI";
import CustomerList from "../components/customerList";


const CustomerListPage = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        loadCustomersFromApi()
            .then((items) => {
                setState(items);
            });
    }, []);
    
    return <>
        <h1>Liste des clients</h1>
        <CustomerList tasks={state} />
    </>
}

export default CustomerListPage;
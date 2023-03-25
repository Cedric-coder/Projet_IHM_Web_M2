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
        <CustomerList tasks={state} />
    </>
}

export default CustomerListPage;
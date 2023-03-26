import React, { useEffect, useState } from "react";
import { loadCustomerFromApi } from "../api/customersAPI";
import { loadInvoiceFromApi} from "../api/invoicesAPI"
import CustomerDetail from "../components/customerDetail";
import InvoiceList from "../components/invoiceList";
import { useParams } from "react-router-dom";



const CustomerDetailPage = () => {
    const [stateCustomer, setCustState] = useState([]);
    const [stateInvoice, setInvoicesState] = useState([]);
    const params = useParams();

    const id = params.id;

    useEffect(() => {
        loadCustomerFromApi(id)
            .then((customer) => {
                setCustState(customer);
                loadInvoiceFromApi(customer.id)
                    .then((invoices) => {
                        setInvoicesState(invoices);
                    })
            });
    }, []);
    
    return <>
        <CustomerDetail tasks={stateCustomer} />
        <InvoiceList tasks={stateInvoice} />
    </>
}

export default CustomerDetailPage;
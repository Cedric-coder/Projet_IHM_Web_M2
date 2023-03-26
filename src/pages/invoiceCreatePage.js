import React, { useEffect, useState } from "react";
import { loadCustomerFromApi } from "../api/customersAPI";
import { loadInvoiceFromApi} from "../api/invoicesAPI"
import CustomerDetail from "../components/customerDetail";
import InvoiceCreateForm from "../components/invoiceCreateForm.js";
import { useParams } from "react-router-dom";



const InvoiceCreatePage = () => {
    
    return <>
        <InvoiceCreateForm/>
    </>
}

export default InvoiceCreatePage;
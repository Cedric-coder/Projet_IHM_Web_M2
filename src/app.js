// src/app.js

// React va permettre de dessiner notre arbre d'éléments HTML
import React from "react";
// ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetailPage from "./pages/customerDetailPage";
import CustomerListPage from "./pages/customerListPage";
import InvoiceCreatePage from "./pages/invoiceCreatePage";
import CustomerCreatePage from "./pages/customerCreatePage";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<CustomerListPage />}
            />
            <Route
                path="/:id_customer"
                element={<CustomerDetailPage />}
            />
            <Route
                path="/create"
                element={<CustomerCreatePage />}
            />
            <Route
                path="/:id_customer/invoices/add"
                element={<InvoiceCreatePage />}
            />
        </Routes>
    </BrowserRouter>
}

// Imprime l'arbre renvoyé par App() dans l'élément <main> du DOM HTML
ReactDOM.createRoot(document.querySelector('main')).render(<App />)

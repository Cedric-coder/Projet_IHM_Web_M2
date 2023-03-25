import React, { useEffect, useState } from "react";
import { loadCustomersFromApi, addCustomerToApi } from "../api/customersAPI";
import CustomerList from "../components/customerList";


const CustomerListPage = () => {
    const [state, setState] = useState([]);

    // On utilise le hook useEffect, qui permet de créer un comportement
    // qui aura lieu lors de CHAQUE rendu du composant React
    // mais en passant un tableau de dépendances vide en deuxième paramètres, on explique à React que ce comportement 
    // ne devra avoir lieu qu'une seule fois, au chargement du composant
    useEffect(() => {
        // Appel HTTP vers Supabase
        loadCustomersFromApi()
            .then((items) => {
                // On remplace la valeur actuel de state
                // par le tableau d'items venant de l'API
                setState(items);
            });
    }, []);

    // Pour que nos composants profitent du state et des fonctions
    // associées, on leur transmet les informations nécessaires
    // via le biais des props
    
    return <>
        <CustomerList tasks={state} />
    </>
}

export default CustomerListPage;
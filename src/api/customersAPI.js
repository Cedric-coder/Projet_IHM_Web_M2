// src/api/http.js


const SUPABASE_URL = "https://fqjzjrowpvvqdnnysrhf.supabase.co/rest/v1/customers";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxanpqcm93cHZ2cWRubnlzcmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDcxMTQsImV4cCI6MTk5MzA4MzExNH0.QS9O0CKhWg87YhhX8oBZdj2iXh20EI0DWSupmiDGUig";

/**
 * Ajoute un customer dans l'API
 * @param {{fullName: string, email: string}} customer 
 * @returns Promise<{id: number, fullName: string, email: string}>
 */
export const addCustomerToApi = (customer) => {
    return fetch(SUPABASE_URL, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
     .then((response) => response.json())
     .then(items => items[0]);
}

/**
 * Récupère les donnes des customers à partir de l'API
 * @returns Promise<Array<{id: number, fullName: string, email: string}>>
 */
export const loadCustomersFromApi = () => {
    return fetch(`${SUPABASE_URL}?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
            'Content-Type': 'application/json'
        },
    }).then((response) => {console.log(response);return response.json();})
}

/**
 * Récupère les donnes d'un customers à partir de l'API
 * @param id : number Correspond à l'id du customer
 * @returns Promise<{id: number, fullName: string, email: string}>
 */
export const loadCustomerFromApi = (id) => {
    return fetch(`${SUPABASE_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        // La réponse contenant un tableau de customers
        // Nous ne retournons que le premier (et le seul)
        .then(customers => customers[0]);
}
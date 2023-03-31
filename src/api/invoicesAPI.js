// src/api/http.js


const SUPABASE_URL = "https://fqjzjrowpvvqdnnysrhf.supabase.co/rest/v1/invoices";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxanpqcm93cHZ2cWRubnlzcmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDcxMTQsImV4cCI6MTk5MzA4MzExNH0.QS9O0CKhWg87YhhX8oBZdj2iXh20EI0DWSupmiDGUig";

/**
 * Ajoute un invoice dans l'API
 * @param {{id_customer: number, amount: number, status: string}} invoice 
 * @returns Promise<{id: number, id_customer: number, amount: number, status: string}>
 */
export const addInvoiceToApi = (invoice) => {
    return fetch(SUPABASE_URL, {
        method: "POST",
        body: JSON.stringify(invoice),
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
 * Récupère les donnees des invoices à partir de l'API
 * @returns Promise<Array<{id: number, id_customer: number, amount: number, status: string}>>
 */
export const loadInvoicesFromApi = () => {
    return fetch(`${SUPABASE_URL}?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

/**
 * Récupère les donnes d'un customers à partir de l'API
 * @param id Correspond à l'id du customer
 * @returns Promise<Array<{id: number, id_customer: number, amount: number, status: string}>>
 */
export const loadInvoiceFromApi = (id) => {
    return fetch(`${SUPABASE_URL}?id_customer=eq.${id}`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        } 
    }).then(response => response.json())
}
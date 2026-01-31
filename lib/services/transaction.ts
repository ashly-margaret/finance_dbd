import { ENDPOINTS } from "../endpoints"

export async function getTransactionData() {
    const res = await fetch(ENDPOINTS.TRANSACTION)
    if (!res.ok) {
        throw new Error("Failed to fetch transaction data")
    }
    return res.json()
}
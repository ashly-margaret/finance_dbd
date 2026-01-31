import { ENDPOINTS } from "../endpoints"

export async function getBillingData() {
    const res = await fetch(ENDPOINTS.BILLING)
    if (!res.ok) {
        throw new Error("Failed to fetch billing data")
    }
    return res.json()
}
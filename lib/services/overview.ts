import { ENDPOINTS } from "../endpoints"

export async function getOverviewData() {
    const res = await fetch(ENDPOINTS.OVERVIEW)
    if (!res.ok) {
        throw new Error("Failed to fetch overview data")
    }
    return res.json()
}
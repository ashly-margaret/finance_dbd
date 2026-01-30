import { ENDPOINTS } from "../endpoints"

export async function getMonthlyUsageData() {
    const res = await fetch(ENDPOINTS.MONTHLY_USAGE)
    if (!res.ok) {
        throw new Error("Failed to fetch monthly usage data")
    }
    return res.json()
}

export async function getTrafficBreakdownData() {
    const res = await fetch(ENDPOINTS.TRAFFIC_BREAKDOWN)
    if (!res.ok) {
        throw new Error("Failed to fetch traffic breakdown data")
    }
    return res.json()
}
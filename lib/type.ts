export type OverviewData = {
    totalCalls: number
    revenue: number
    activeApis: number
    delta: {
        totalCalls: number
        revenue: number
        activeApis: number
    }
}

export type MonthlyUsage = {
  month: string   // e.g., "Jan", "Feb", "Mar"
  totalCalls: number
  revenue?: number  // optional, if you want multi-line
}

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

export type TrafficBreakdown = {
  month: string   // e.g., "Jan", "Feb", "Mar"
  free: number
  paid: number
  premium: number
}

export type UniqueVsNonUnique = {
  type: string   // e.g., "Unique Calls", "Non-Unique Calls"
  count: number
}
export type RevenueBreakdown = {
  plan: "Free" | "Pro" | "Enterprise"
  revenue: number
}

export type Transaction = {
  id: string
  client: string
  api: string
  type: string
  status: string
  calls: number
  cost: number
  date: string
}

export type Billing = {
    invoiceId: string
    period: string
    totalCalls: number
    billableCalls: number
    freeCalls: number
    amount: number
    status: string
    issuedAt: string
    dueDate: string
    downloadUrl: string
}


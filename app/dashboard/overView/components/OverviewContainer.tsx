"use client";

import PageHeader from "@/components/PageHeader";
import React, { useState, useEffect } from "react";
import { UsageTrendChart } from "./UsageTrendChart";
import { getOverviewData } from "@/lib/services/overview";
import { MonthlyUsage, OverviewData, RevenueBreakdown, TrafficBreakdown, UniqueVsNonUnique } from "@/lib/type";
import { getMonthlyUsageData, getRevenueBreakDown, getTrafficBreakdownData, getUniqueVsNonUniqueData } from "@/lib/services/chart";
import { TrafficBreakDownChart } from "./TrafficBreakDownChart";
import { UniqueVsNonUniqueChart } from "./UniqueVsNonUniqueChart";
import { RevenueBreakDownChart } from "./RevenueBreakDownChart";

/**
 * OverviewContainer
 * 
 * This Client Component handles the state and interactivity for the Overview dashboard.
 * APIs should be called within useEffect or via libraries like TanStack Query.
 */
export default function OverviewContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
    const [monthlyUsageData, setMonthlyUsageData] = useState<MonthlyUsage[] | null>(null);
    const [trafficBreakdownData, setTrafficBreakdownData] = useState<TrafficBreakdown[] | null>(null);
    const [uniqueVsNonUniqueData, setUniqueVsNonUniqueData] = useState<UniqueVsNonUnique[] | null>(null);
    const [revenueBreakDownData, setRevenueBreakDownData] = useState<RevenueBreakdown[] | null>(null);
    
    const fetchOverviewData = async () => {
        const res = await getOverviewData()
        setOverviewData(res)
    }

    const fetchMonthlyUsageData = async () => {
        const res = await getMonthlyUsageData()
        setMonthlyUsageData(res)
    }

    const fetchTrafficBreakdownData = async () => {
        const res = await getTrafficBreakdownData()
        setTrafficBreakdownData(res)
    }

    const fetchUniqueVsNonUniqueData = async () => {
        const res = await getUniqueVsNonUniqueData()
        setUniqueVsNonUniqueData(res)
    }

    const fetchRevenueBreakDown = async () => {
        const res = await getRevenueBreakDown()
        setRevenueBreakDownData(res)
    }

    useEffect(() => {
        fetchOverviewData()
        fetchMonthlyUsageData()
        fetchTrafficBreakdownData()
        fetchUniqueVsNonUniqueData()
        fetchRevenueBreakDown()
    }, []);

    return (
        <div className="space-y-6">
            <PageHeader title="Overview" />

            {/* Main Grid Layout */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Placeholder Stats Cards */}
                {["Total Calls", "Revenue", "Active APIs", "Errors"].map((item) => (
                    <div key={item} className="p-6 rounded-xl bg-card text-card-foreground shadow-sm">
                        <h3 className="text-sm font-medium tracking-tight text-foreground">
                            {item}
                        </h3>
                        <div className="mt-2 text-2xl font-bold text-primary">{item === "Total Calls" ? overviewData?.totalCalls : item === "Revenue" ? overviewData?.revenue : item === "Active APIs" ? overviewData?.activeApis : overviewData?.delta.totalCalls}</div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 p-6 rounded-xl  bg-card shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">Monthly Usage Trend</h3>
                    <UsageTrendChart data={monthlyUsageData} />
                </div>
                <div className="col-span-3 p-6 rounded-xl  bg-card  shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">Paid Calls by Type</h3>
                    <UniqueVsNonUniqueChart data={uniqueVsNonUniqueData} />                </div>
                <div className="col-span-4 p-6 rounded-xl  bg-card shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">Traffic Breakdown</h3>
                    <TrafficBreakDownChart data={trafficBreakdownData} />
                </div>
                <div className="col-span-3 p-6 rounded-xl  bg-card  shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">Revenue Breakdown</h3>
                    <RevenueBreakDownChart data={revenueBreakDownData} />
                </div>
            </div>
        </div>
    );
}

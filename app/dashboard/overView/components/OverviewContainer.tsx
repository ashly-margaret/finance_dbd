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
import { CustomChartSkeleton } from "./Skeletons";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

/**
 * OverviewContainer
 * 
 * This Client Component handles the state and interactivity for the Overview dashboard.
 * APIs should be called within useEffect or via libraries like TanStack Query.
 */
export default function OverviewContainer() {
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
        const loadAllData = async () => {
            try {
                await Promise.all([
                    fetchOverviewData(),
                    fetchMonthlyUsageData(),
                    fetchTrafficBreakdownData(),
                    fetchUniqueVsNonUniqueData(),
                    fetchRevenueBreakDown()
                ])
            } catch (error) {
                console.error("Failed to load overview data", error)
                toast.error("Something went wrong")
            }
        }
        loadAllData()
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
                        <div className="mt-2 text-2xl font-bold text-primary">
                            {overviewData ? (
                                item === "Total Calls" ? overviewData.totalCalls : 
                                item === "Revenue" ? overviewData.revenue : 
                                item === "Active APIs" ? overviewData.activeApis : 
                                overviewData.delta.totalCalls
                            ) : (
                                <Skeleton className="h-8 w-28" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 p-6 rounded-xl  bg-card shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground mb-4">Monthly Usage Trend</h3>
                    {monthlyUsageData ? <UsageTrendChart data={monthlyUsageData} /> : <CustomChartSkeleton />}
                </div>
                <div className="col-span-3 p-6 rounded-xl  bg-card  shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground mb-4">Paid Calls by Type</h3>
                    {uniqueVsNonUniqueData ? <UniqueVsNonUniqueChart data={uniqueVsNonUniqueData} /> : <CustomChartSkeleton />}
                </div>
                <div className="col-span-4 p-6 rounded-xl  bg-card shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground mb-4">Traffic Breakdown</h3>
                    {trafficBreakdownData ? <TrafficBreakDownChart data={trafficBreakdownData} /> : <CustomChartSkeleton />}
                </div>
                <div className="col-span-3 p-6 rounded-xl  bg-card  shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground mb-4">Revenue Breakdown</h3>
                    {revenueBreakDownData ? <RevenueBreakDownChart data={revenueBreakDownData} /> : <CustomChartSkeleton />}
                </div>
            </div>
        </div>
    );
}

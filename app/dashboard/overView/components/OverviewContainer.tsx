"use client";

import PageHeader from "@/components/PageHeader";
import React, { useState, useEffect } from "react";
import { UsageTrendChart } from "./UsageTrendChart";
import { getOverviewData } from "@/lib/services/overview";
import { OverviewData } from "@/lib/type";

/**
 * OverviewContainer
 * 
 * This Client Component handles the state and interactivity for the Overview dashboard.
 * APIs should be called within useEffect or via libraries like TanStack Query.
 */
export default function OverviewContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [overviewData, setOverviewData] = useState<OverviewData | null>(null);

    // useEffect(() => {
    //     // Simulate data fetching
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
    //             Loading dashboard data...
    //         </div>
    //     );
    // }
const fetchOverviewData = async () => {
  const res = await getOverviewData()
  setOverviewData(res)
}

    useEffect(() => {
        fetchOverviewData()
    }, []);

    return (
        <div className="space-y-6">          
            <PageHeader title="Overview"/>

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
                  <UsageTrendChart/>
                </div>
                <div className="col-span-3 p-6 rounded-xl  bg-card  shadow-sm h-[400px]">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">Paid Calls by Type</h3>
                    {/* Chart Placeholder */}
                </div>
            </div>
        </div>
    );
}

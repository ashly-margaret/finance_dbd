"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { TrafficBreakdown } from "@/lib/type"

export const description = "A line chart"



export function TrafficBreakDownChart({ data }: { data: TrafficBreakdown[] | null }) {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardContent>
                <ChartContainer  className="h-[300px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={data || []}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}

                        />
                        <Line
                            dataKey="free"
                            type="natural"
                            stroke="#68BAFF"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

"use client"
import { MonthlyUsage } from "@/lib/type"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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

export const description = "A line chart with a label"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig



export function UsageTrendChart({ data }: { data: MonthlyUsage[] | null }) {
    return (
        <Card className="border-none shadow-none bg-transparent">
    
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full  ">
                    <LineChart
                        accessibilityLayer
                        data={data || []}
                        margin={{
                            top: 20,
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
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey="totalCalls"
                            type="natural"
                            stroke="#68BAFF"
                            strokeWidth={2}
                            dot={{
                                fill: "#68BAFF",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
      
        </Card>
    )
}

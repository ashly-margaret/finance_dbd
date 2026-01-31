"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { RevenueBreakdown } from "@/lib/type"

export const description = "A bar chart showing revenue by plan"

const COLORS: Record<string, string> = {
  Free: "#DD8829",
  Pro: "#36AFAD",
  Enterprise: "#3385DE",
}

export function RevenueBreakDownChart({ data }: { data: RevenueBreakdown[] | null }) {
  return (
    <Card className="shadow-none border-none">
      <div className="flex justify-end gap-4 mb-4">
        {Object.entries(COLORS).map(([plan, color]) => (
          <div key={plan} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-muted-foreground">
              {plan}
            </span>
          </div>
        ))}
      </div>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={data || []}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="plan"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="revenue"
              radius={[4, 4, 0, 0]}
              
            >
              {(data || []).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.plan] || "#888888"} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

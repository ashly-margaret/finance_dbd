"use client"

import * as React from "react"
import { Label, Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { UniqueVsNonUnique } from "@/lib/type"

/* ----------------------------------------
   Pie Slice Colors (Theme-aware)
---------------------------------------- */
const PIE_COLORS :any = {
  "Unique Calls": "hsl(var(--chart-1))",
  "Non-Unique Calls": "hsl(var(--chart-2))",
}

export function UniqueVsNonUniqueChart({
  data,
}: {
  data: UniqueVsNonUnique[] | null
}) {
  /* ----------------------------------------
     Attach colors to data
  ---------------------------------------- */
  const processedData = React.useMemo(() => {
    return (data || []).map((item) => ({
      ...item,
      fill: PIE_COLORS[item.type],
    }))
  }, [data])

  /* ----------------------------------------
     Total Count (center label)
  ---------------------------------------- */
  const totalCalls = React.useMemo(() => {
    return (data || []).reduce((acc, curr) => acc + curr.count, 0)
  }, [data])

  return (
    <Card className="flex flex-col border-none shadow-none bg-transparent">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={processedData}
              dataKey="count"
              nameKey="type"
              innerRadius={60}
              strokeWidth={4}
            >
              {processedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  stroke={entry.fill}
                />
              ))}

              {/* Center Label */}
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox)) return null

                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalCalls.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 24}
                        className="fill-muted-foreground text-sm"
                      >
                        Total Calls
                      </tspan>
                    </text>
                  )
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex justify-center gap-6 mt-4">
  {processedData.map((item) => (
    <div key={item.type} className="flex items-center gap-2">
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: item.fill }}
      />
      <span className="text-sm text-muted-foreground">
        {item.type}
      </span>
    </div>
  ))}
</div>

    </Card>
  )
}

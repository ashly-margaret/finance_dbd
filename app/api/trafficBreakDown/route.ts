import { trafficBreakdownMock } from "@/app/mocks/charts"
import { NextResponse } from "next/server"

export async function GET() {
  await new Promise((res) => setTimeout(res, 1200))

  if (Math.random() < 0.05) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }

  return NextResponse.json(trafficBreakdownMock)
}

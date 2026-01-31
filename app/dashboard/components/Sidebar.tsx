"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Receipt, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard/overView",
    icon: BarChart3,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: Receipt,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: Receipt,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      className={cn(
        "relative flex h-full flex-col bg-[#181D2B] transition-all duration-300",
        isCollapsed ? "w-16 px-2" : "w-64 px-4",
        ""
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-9 h-6 w-6 rounded-full border bg-background shadow-md z-40 hover:bg-accent"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>

      <div className={cn("mb-8 flex h-16 items-center", isCollapsed ? "justify-center" : "px-2")}>
        <h1 className="text-xl font-bold tracking-tight overflow-hidden whitespace-nowrap transition-all">
          {isCollapsed ? "FD" : "Finance DB"}
        </h1>
      </div>

      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg py-2 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-[#6e44ff]/40 to-[#6e44ff]/10 text-white shadow-[0_4px_20px_rgba(110,68,255,0.4)]"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white",
                  isCollapsed ? "justify-center px-2" : "px-3"
              )}
              title={isCollapsed ? item.title : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

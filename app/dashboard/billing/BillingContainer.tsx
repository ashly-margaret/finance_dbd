"use client"

import { useEffect, useState } from "react"
import { DataTable } from "../transactions/components/dataTable"
import { ColumnDef } from "@tanstack/react-table"
import PageHeader from "@/components/PageHeader"
import { getBillingData } from "@/lib/services/billing"
import { Billing } from "@/lib/type"
import { Download } from "lucide-react"
import Loader from "@/components/ui/loader"
import { toast } from "sonner"

const BillingContainer = () => {
    const [data, setData] = useState<Billing[]>()
    const [isLoading, setIsLoading] = useState(true)

    const columns: ColumnDef<Billing>[] = [
        {
            accessorKey: "invoiceId",
            header: "Invoice ID",
        },
        {
            accessorKey: "period",
            header: "Period",
        },
        {
            accessorKey: "totalCalls",
            header: "Total Calls",
        },
        {
            accessorKey: "billableCalls",
            header: "Billable Calls",
        },
        {
            accessorKey: "freeCalls",
            header: "Free Calls",
        },
        {
            accessorKey: "amount",
            header: "Amount",
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("amount"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)
                return <div className="font-medium">{formatted}</div>
            },
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            accessorKey: "issuedAt",
            header: "Issued At",
        },
        {
            accessorKey: "dueDate",
            header: "Due Date",
        },
        {
            accessorKey: "downloadUrl",
            header: "Download",
            cell: ({ row }) => {
                const invoiceId = row.getValue("invoiceId") as string
                const downloadUrl = `/api/download-invoice?id=${invoiceId}`
                
                return (
                    <div className="flex w-full items-center justify-center cursor-pointer">
                        <Download className="w-4 h-4 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors" onClick={() => window.open(downloadUrl, "_blank")}/>
                    </div>
                )
            },
        },
    ]

    useEffect(() => {
        getBillingData()
            .then((res) => {
                setData(res)
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => setIsLoading(false))
    }, []);

  return (
    <div className="space-y-6">
        <PageHeader title="Billing" />
        {isLoading ? <Loader /> : <DataTable columns={columns} data={data || []} />}
    </div>
  )
}

export default BillingContainer
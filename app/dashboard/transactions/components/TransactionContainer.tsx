"use client"

import { useEffect, useState } from "react"
import { getTransactionData } from "@/lib/services/transaction"
import { Transaction } from "@/lib/type"
import { DataTable } from "./dataTable"
import { ColumnDef } from "@tanstack/react-table"
import PageHeader from "@/components/PageHeader"
import Loader from "@/components/ui/loader"
import { toast } from "sonner"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


const TransactionContainer = () => {
    const [data, setData] = useState<Transaction[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const columns: ColumnDef<Transaction>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "client",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Client
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "api",
            header: "API",
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => {
                const type = row.getValue("type") as string
                return (
                    <span className={type === 'Paid' ? 'text-emerald-500 bg-emerald-100 rounded-full px-2 py-1' : 'text-blue-500 bg-blue-100 rounded-full px-2 py-1'}>
                        {type}
                    </span>
                )
            }
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string
                return (
                    <span className={status === 'Success' ? 'text-emerald-500 bg-emerald-100 rounded-full px-2 py-1' : 'text-red-500 bg-red-100 rounded-full px-2 py-1'}>
                        {status}
                    </span>
                )
            }
        },
        {
            accessorKey: "calls",
            header: "Calls",
        },
        {
            accessorKey: "cost",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Cost
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("cost"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)
                return <div className="font-medium">{formatted}</div>
            },
        },
        {
            accessorKey: "date",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
    ]

    useEffect(() => {
        getTransactionData()
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="space-y-6">
            <PageHeader title="Transactions" />
            {isLoading ? <Loader /> : <DataTable columns={columns} data={data || []} />}
        </div>
    )
}

export default TransactionContainer
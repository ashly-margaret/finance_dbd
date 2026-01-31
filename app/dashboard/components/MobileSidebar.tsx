"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./Sidebar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden pr-4 hover:bg-transparent">
                    <Menu className="w-8 h-8 text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-[#181D2B] border-none w-72">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

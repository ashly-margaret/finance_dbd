import { Sidebar } from "./components/Sidebar"
import { MobileSidebar } from "./components/MobileSidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0F1117]">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full bg-[#181D2B]  z-20">
        <SidebarBase />
      </div>
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        {/* <div className="md:hidden flex items-center justify-between bg-[#181D2B] p-4 border-b border-[#2A303C]">
           <div className="flex items-center gap-2">
             <MobileSidebar />
             <span className="text-white font-bold text-lg">Finance DB</span>
           </div>
        </div> */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
            {children}
        </main>
      </div>
    </div>
  )
}

function SidebarBase() {
    return <Sidebar />
}

import { Skeleton } from "@/components/ui/skeleton";

export function BarChartSkeleton() {
  return (
    <div className="h-[300px] w-full flex flex-col justify-end gap-2 p-4">
       <div className="flex items-end justify-between h-full gap-2">
            <Skeleton className="h-[40%] w-12 rounded-t-md" />
            <Skeleton className="h-[70%] w-12 rounded-t-md" />
            <Skeleton className="h-[50%] w-12 rounded-t-md" />
            <Skeleton className="h-[80%] w-12 rounded-t-md" />
            <Skeleton className="h-[60%] w-12 rounded-t-md" />
            <Skeleton className="h-[90%] w-12 rounded-t-md" />
       </div>
    </div>
  );
}

export function PieChartSkeleton() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center p-4">
      <Skeleton className="h-[200px] w-[200px] rounded-full" />
    </div>
  );
}

export function LineChartSkeleton() {
    return (
        <div className="h-[300px] w-full flex flex-col justify-end p-4 gap-4">
             <div className="flex-1 w-full flex items-end gap-4 overflow-hidden">
                <Skeleton className="h-[20%] w-full" />
                <Skeleton className="h-[40%] w-full" />
                <Skeleton className="h-[30%] w-full" />
                <Skeleton className="h-[60%] w-full" />
                <Skeleton className="h-[45%] w-full" />
                <Skeleton className="h-[70%] w-full" />
                <Skeleton className="h-[50%] w-full" />
             </div>
        </div>
    )
}

export function CustomChartSkeleton() {
  return (
    <div className="h-[300px] w-full flex flex-col p-6 space-y-6">
      {/* Top section with lines */}
      <div className="flex flex-col space-y-3 gap-2">
        <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-3/4 rounded-full" />
         <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-3/4 rounded-full" />
      </div>

      {/* Spacer to push bottom blocks down */}
      <div className="flex-grow" />

      {/* Bottom section with blocks */}
      <div className="flex justify-center items-center gap-4">
        <Skeleton className="h-12 w-24 rounded-md" />
        <Skeleton className="h-12 w-24 rounded-md" />
      </div>
    </div>
  );
}

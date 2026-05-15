import { Skeleton } from "@/components/ui/Skeleton";

export function HomeSkeleton() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading plays">
      <Skeleton className="h-36 w-full rounded-2xl" />
      <Skeleton className="h-6 w-40" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}

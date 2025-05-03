import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DoctorsLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-full md:w-[200px]" />
            <Skeleton className="h-10 w-full md:w-[150px]" />
          </div>
        </div>

        <div className="mb-6">
          <Skeleton className="h-10 w-full mb-6" />
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-none shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-28" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-32" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

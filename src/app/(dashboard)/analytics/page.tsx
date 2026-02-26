import { RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { analyticsMetrics } from "@/data/mock-data";

export default function AnalyticsPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b bg-card px-6 py-4">
        <div className="mx-auto max-w-[1920px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold">Analytics</h1>
              <p className="text-muted-foreground">
                Monthly comparison and performance metrics
              </p>
            </div>
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
          <div className="mt-4 flex gap-2 border-b">
            <button className="border-b-2 border-primary px-4 py-2 text-sm font-medium text-primary">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Workplace
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1920px] space-y-6 p-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analyticsMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-3xl font-semibold">{metric.value}</p>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {metric.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart: Total Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Trend - Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-end justify-around gap-2 px-4">
              {[
                { h: 80, label: "W1" },
                { h: 120, label: "W2" },
                { h: 100, label: "W3" },
                { h: 160, label: "W4" },
              ].map((bar) => (
                <div key={bar.label} className="flex flex-col items-center gap-1">
                  <div
                    className="w-12 rounded-t bg-blue-500"
                    style={{ height: `${bar.h}px` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart: Active Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Trend - Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-end justify-around gap-2 px-4">
              {[
                { h: 100, label: "W1" },
                { h: 130, label: "W2" },
                { h: 150, label: "W3" },
                { h: 180, label: "W4" },
              ].map((bar) => (
                <div key={bar.label} className="flex flex-col items-center gap-1">
                  <div
                    className="w-12 rounded-t bg-purple-500"
                    style={{ height: `${bar.h}px` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Mail, ClipboardCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emails, tasks, meetings } from "@/data/mock-data";

export default function WorkplaceItemDetail() {
  const params = useParams();
  const router = useRouter();
  
  const type = params.type as string;
  const id = params.id as string;

  // Find the exact item based on Type and ID
  let item: Record<string, any> | null = null;
  if (type === "email") {
    item = emails.find((e) => e.id.toString() === id) || null;
  } else if (type === "task") {
    item = tasks.find((t) => t.id === id) || null;
  } else if (type === "meeting") {
    item = meetings.find((m) => m.id.toString() === id) || null;
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-[1400px] p-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">Item Not Found</h1>
        <Button onClick={() => router.push("/workplace")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Workplace
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.push("/workplace")} className="-ml-3 text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to items
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="default">Complete</Button>
        </div>
      </div>

      <Card className="max-w-4xl">
        <CardHeader className="border-b bg-zinc-50/50 pb-6 dark:bg-zinc-900/50">
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            {type === "email" && <Mail className="h-4 w-4 text-blue-500" />}
            {type === "task" && <ClipboardCheck className="h-4 w-4 text-red-500" />}
            {type === "meeting" && <Calendar className="h-4 w-4 text-green-500" />}
            <span className="capitalize font-medium">{type}</span>
            <span>•</span>
            <span>{type === "task" ? item.id : `#${item.id}`}</span>
          </div>
          <CardTitle className="text-2xl leading-tight">{item.title}</CardTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="capitalize">
              {item.status || "Scheduled"}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {item.priority} Priority
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-2 gap-4 rounded-lg bg-zinc-50 p-4 text-sm dark:bg-zinc-900/50">
            {type === "email" && (
              <>
                <div>
                  <span className="block text-muted-foreground">From</span>
                  <span className="font-medium">{item.from}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Date</span>
                  <span className="font-medium">{item.date}</span>
                </div>
              </>
            )}
            {type === "task" && (
              <>
                <div>
                  <span className="block text-muted-foreground">Assignee</span>
                  <span className="font-medium">{item.assignee}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Status</span>
                  <span className="font-medium">{item.status}</span>
                </div>
              </>
            )}
            {type === "meeting" && (
              <>
                <div>
                  <span className="block text-muted-foreground">Time</span>
                  <span className="font-medium">{item.time}</span>
                </div>
              </>
            )}
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Description</h3>
            <div className="rounded-lg border p-4 text-sm text-zinc-700 dark:text-zinc-300">
              {item.preview || "No detailed description available for this item."}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

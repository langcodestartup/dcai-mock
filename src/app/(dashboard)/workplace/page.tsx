"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ClipboardCheck, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { emails, tasks, meetings } from "@/data/mock-data";

const statusStyles: Record<string, string> = {
  Unread: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Needs Reply": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  Read: "bg-secondary text-secondary-foreground",
  Replied: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "To Do": "bg-secondary text-secondary-foreground",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "In Review": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const meetingBadge: Record<string, { label: string; style: string }> = {
  normal: { label: "Scheduled", style: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  high: { label: "High Priority", style: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
  critical: { label: "Critical", style: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
};

type TabType = "email" | "task" | "meeting";

export default function WorkplacePage() {
  const [activeTab, setActiveTab] = useState<TabType>("email");
  const router = useRouter();

  const handleRowClick = (type: TabType, id: string | number) => {
    router.push(`/workplace/${type}/${id}`);
  };

  const renderEmailTable = () => (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {emails.map((email) => (
          <TableRow key={email.id} className="cursor-pointer" onClick={() => handleRowClick('email', email.id)}>
            <TableCell>
              <span className="flex items-center gap-2 text-sm font-medium text-blue-600">
                <Mail className="h-4 w-4" />
                Email
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{email.title}</div>
              <div className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                {email.preview}
              </div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {email.from.split("@")[0]}
            </TableCell>
            <TableCell>
              <Badge variant="secondary" className={statusStyles[email.status]}>
                {email.status}
              </Badge>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {email.date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );

  const renderTaskTable = () => (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>ID & Title</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id} className="cursor-pointer" onClick={() => handleRowClick('task', task.id)}>
            <TableCell>
              <span className="flex items-center gap-2 text-sm font-medium text-red-600">
                <ClipboardCheck className="h-4 w-4" />
                Task
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{task.id}: {task.title}</div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {task.assignee}
            </TableCell>
            <TableCell>
              <Badge variant="secondary" className={statusStyles[task.status]}>
                {task.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant="secondary"
                className={
                  task.priority === "Critical"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : task.priority === "High"
                      ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                      : "bg-secondary text-secondary-foreground"
                }
              >
                {task.priority}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );

  const renderMeetingTable = () => (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meetings.map((meeting) => (
          <TableRow key={meeting.id} className="cursor-pointer" onClick={() => handleRowClick('meeting', meeting.id)}>
            <TableCell>
              <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                <Calendar className="h-4 w-4" />
                Meeting
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{meeting.title}</div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {meeting.time}
            </TableCell>
            <TableCell>
              <Badge variant="secondary" className={meetingBadge[meeting.priority].style}>
                {meetingBadge[meeting.priority].label}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Workplace</h1>
        <p className="mt-2 text-muted-foreground">
          Manage all your work items in one place
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-2 border-b">
        <button
          onClick={() => setActiveTab("email")}
          className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "email"
            ? "border-b-2 border-primary text-primary"
            : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Mail className="h-4 w-4" />
          Email
        </button>
        <button
          onClick={() => setActiveTab("task")}
          className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "task"
            ? "border-b-2 border-primary text-primary"
            : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <ClipboardCheck className="h-4 w-4" />
          Task
        </button>
        <button
          onClick={() => setActiveTab("meeting")}
          className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "meeting"
            ? "border-b-2 border-primary text-primary"
            : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Calendar className="h-4 w-4" />
          Meeting
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex min-w-[300px] flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder={`Search ${activeTab}s...`} className="pl-10" />
          </div>
          <Button>Search</Button>
        </div>
        <select className="rounded-lg border bg-background px-3 py-2 text-sm">
          <option>10 per page</option>
          <option>20 per page</option>
          <option>30 per page</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border">
        <Table>
          {activeTab === "email" && renderEmailTable()}
          {activeTab === "task" && renderTaskTable()}
          {activeTab === "meeting" && renderMeetingTable()}
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button size="sm">1</Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}

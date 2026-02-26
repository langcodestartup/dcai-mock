import {
  Mail,
  ClipboardCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { emails, tasks, meetings, urgentAlerts } from "@/data/mock-data";

const priorityStyles = {
  Critical:
    "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30",
  High: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
  Medium: "",
  Low: "",
  normal: "",
  high: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
  critical:
    "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30",
};

const priorityBadge = {
  Critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  High: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Medium: "bg-secondary text-secondary-foreground",
  Low: "text-muted-foreground",
};

const statusBadge: Record<string, string> = {
  "To Do": "bg-secondary text-secondary-foreground",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "In Review": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const meetingBadge: Record<string, { label: string; style: string }> = {
  normal: { label: "Scheduled", style: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  high: { label: "High Priority", style: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
  critical: { label: "Critical", style: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            You have 14 action items requiring attention
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-muted-foreground">
                  Emails
                </span>
              </div>
              <div className="text-3xl font-bold">5</div>
              <div className="mt-2 text-xs text-muted-foreground">3 urgent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex items-center gap-2">
                <ClipboardCheck className="h-6 w-6 text-red-600" />
                <span className="text-sm font-medium text-muted-foreground">
                  Tasks
                </span>
              </div>
              <div className="text-3xl font-bold">6</div>
              <div className="mt-2 text-xs text-muted-foreground">2 urgent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-2 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-muted-foreground">
                  Meetings
                </span>
              </div>
              <div className="text-3xl font-bold">4</div>
              <div className="mt-2 text-xs text-muted-foreground">2 urgent</div>
            </CardContent>
          </Card>
        </div>

        {/* Urgent Alerts */}
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-800 dark:text-red-200">
            <AlertTriangle className="h-5 w-5" />
            Urgent Alerts (5)
          </h3>
          <div className="space-y-2 text-sm text-red-700 dark:text-red-300">
            {urgentAlerts.map((alert, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded bg-red-200 px-1.5 py-0.5 text-xs font-medium dark:bg-red-800">
                  {alert.type}
                </span>
                {alert.text}
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Panels */}
        <div className="mb-6 flex flex-col gap-6 lg:flex-row">
          {/* Emails */}
          <div className="flex-1 lg:w-1/3">
            <Card>
              <CardHeader className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <CardTitle>Emails</CardTitle>
                  <Badge className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    5
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="max-h-[500px] space-y-3 overflow-y-auto p-4">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className={`rounded-lg border p-3 ${
                      priorityStyles[email.priority] || ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium">{email.title}</p>
                      <span
                        className={`ml-2 shrink-0 text-xs font-semibold ${
                          email.priority === "Critical"
                            ? "text-red-600"
                            : email.priority === "High"
                            ? "text-orange-600"
                            : "text-muted-foreground"
                        }`}
                      >
                        {email.priority}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {email.from}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground/70">
                      {email.preview}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Tasks */}
          <div className="flex-1 lg:w-1/3">
            <Card>
              <CardHeader className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-6 w-6 text-red-600" />
                  <CardTitle>Tasks</CardTitle>
                  <Badge className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    6
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="max-h-[500px] space-y-3 overflow-y-auto p-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`rounded-lg border p-3 ${
                      priorityStyles[task.priority] || ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                          priorityBadge[task.priority]
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                          statusBadge[task.status] || "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium">
                      {task.id}: {task.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Assigned to: {task.assignee}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Meetings */}
          <div className="flex-1 lg:w-1/3">
            <Card>
              <CardHeader className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <CardTitle>Meetings</CardTitle>
                  <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    4
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="max-h-[500px] space-y-3 overflow-y-auto p-4">
                {meetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className={`rounded-lg border p-3 ${
                      priorityStyles[meeting.priority] || ""
                    }`}
                  >
                    <p className="text-sm font-medium">{meeting.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {meeting.time}
                    </p>
                    <span
                      className={`mt-2 inline-block rounded px-1.5 py-0.5 text-xs font-medium ${
                        meetingBadge[meeting.priority].style
                      }`}
                    >
                      {meetingBadge[meeting.priority].label}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

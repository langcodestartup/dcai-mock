import type { ReactNode } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: ReactNode;
  time: string;
  agent?: string;
  agentVia?: string;
}

export const orchestratorMessages: ChatMessage[] = [
  {
    role: "user",
    content:
      "Summarize the CXP Platform project status for this week. Include email highlights, task progress, and upcoming meetings.",
    time: "10:23 AM",
  },
  {
    role: "assistant",
    agent: "Orchestrator",
    time: "10:23 AM",
    content: (
      <div className="space-y-3">
        <p className="text-xs italic text-muted-foreground">
          Analyzing your request... Delegating to Email Agent, Jira Agent, and
          Meeting Agent.
        </p>
        <div className="border-l-2 border-blue-400 pl-3">
          <p className="mb-1 font-semibold text-blue-700 dark:text-blue-300">
            CXP Platform - Weekly Status Summary
          </p>
          <p className="text-xs text-muted-foreground">Feb 24 - Feb 26, 2026</p>
        </div>

        <div>
          <p className="mb-1 font-semibold">Email Highlights</p>
          <ul className="ml-6 list-disc space-y-1 text-xs text-muted-foreground">
            <li>
              <span className="font-medium text-red-600 dark:text-red-400">
                Critical:
              </span>{" "}
              Security Audit Findings require immediate action
            </li>
            <li>
              <span className="font-medium text-orange-600 dark:text-orange-400">
                High:
              </span>{" "}
              Q1 Sprint Review action items pending from Sarah Kim
            </li>
            <li>
              <span className="font-medium text-orange-600 dark:text-orange-400">
                High:
              </span>{" "}
              Data Migration window confirmation needed for Mar 1st
            </li>
            <li>Infrastructure Cost Report for Feb 2026 received ($15,650 total)</li>
            <li>New feature request for Offline Mode from product team</li>
          </ul>
        </div>

        <div>
          <p className="mb-1 font-semibold">Task Progress (Jira)</p>
          <div className="ml-6 space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-16 text-muted-foreground">Total:</span>
              <span className="font-medium">24 tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-muted-foreground">Done:</span>
              <span className="font-medium text-green-600 dark:text-green-400">
                8 completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-muted-foreground">In Progress:</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">
                10 active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-muted-foreground">Blocked:</span>
              <span className="font-medium text-red-600 dark:text-red-400">
                2 blocked
              </span>
            </div>
            <div className="mt-1.5">
              <p className="font-medium">Urgent tasks:</p>
              <ul className="ml-4 mt-0.5 list-disc space-y-0.5 text-muted-foreground">
                <li>
                  <code className="rounded bg-secondary px-1 py-0.5 text-xs text-primary">
                    CXP-156
                  </code>{" "}
                  Fix dashboard loading performance (Critical)
                </li>
                <li>
                  <code className="rounded bg-secondary px-1 py-0.5 text-xs text-primary">
                    CXP-142
                  </code>{" "}
                  Implement OAuth2 token refresh flow (High)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-1 font-semibold">Upcoming Meetings</p>
          <ul className="ml-6 list-disc space-y-1 text-xs text-muted-foreground">
            <li>
              <strong>Today 2:00 PM</strong> - Sprint Planning Q1 Week 9 (15
              attendees)
            </li>
            <li>
              <strong>Tomorrow 10:00 AM</strong> - Security Review Follow-up (5
              attendees)
            </li>
            <li>
              <strong>Thu 3:00 PM</strong> - Data Migration Go/No-Go Decision (8
              attendees)
            </li>
          </ul>
        </div>

        <div className="mt-2 border-t pt-2">
          <p className="mb-1 text-xs font-semibold">Recommendations:</p>
          <ol className="ml-4 list-decimal space-y-0.5 text-xs text-muted-foreground">
            <li>Address the security audit findings before end of day</li>
            <li>Review and unblock CXP-156 and CXP-142 urgently</li>
            <li>Confirm the data migration window by Wednesday</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    role: "user",
    content:
      "What are the details on CXP-156? Who's assigned and what's the blocker?",
    time: "10:25 AM",
  },
  {
    role: "assistant",
    agent: "Orchestrator",
    agentVia: "Jira Agent",
    time: "10:25 AM",
    content: (
      <div className="space-y-2">
        <div className="rounded-lg border bg-secondary/50 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-sm font-semibold text-primary">
              CXP-156
            </span>
            <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
              Critical
            </span>
            <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
              In Progress
            </span>
          </div>
          <p className="mb-2 text-sm font-medium">
            Fix dashboard loading performance
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">Assignee:</span>{" "}
              <span className="font-medium">Park Minjun</span>
            </div>
            <div>
              <span className="text-muted-foreground">Reporter:</span>{" "}
              <span className="font-medium">Sarah Kim</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sprint:</span>{" "}
              <span className="font-medium">Q1 Sprint 9</span>
            </div>
            <div>
              <span className="text-muted-foreground">Created:</span>{" "}
              <span className="font-medium">Feb 20, 2026</span>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold">Blocker Details:</p>
          <p className="text-xs text-muted-foreground">
            The dashboard page makes 3 parallel API calls (
            <code className="rounded bg-secondary px-1 py-0.5 text-xs">
              fetchDashboardEmails
            </code>
            ,{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs">
              fetchDashboardTasks
            </code>
            ,{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs">
              fetchDashboardMeetings
            </code>
            ) but the MongoDB queries are not properly indexed, causing 5+ second
            load times.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          The DBA team confirmed they will deploy indexes by tomorrow morning.
          This should reduce load time to under 500ms.
        </p>
      </div>
    ),
  },
];

export const jiraMessages: ChatMessage[] = [
  {
    role: "user",
    content:
      "Create a bug ticket: The login page has a timeout issue when users try to login with SSO. The page hangs for 30+ seconds then shows a generic error. Priority should be High.",
    time: "2:15 PM",
  },
  {
    role: "assistant",
    agent: "Jira Agent",
    time: "2:15 PM",
    content: (
      <div className="space-y-3">
        <p>I&apos;ve created the bug ticket. Here are the details:</p>
        <div className="rounded-lg border bg-secondary/50 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
              Created
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-primary">
                CXP-189
              </span>
              <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
                Bug
              </span>
              <span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                High
              </span>
            </div>
            <p className="font-medium">
              SSO Login Timeout - Page hangs for 30+ seconds
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <div>
                <span className="text-muted-foreground">Type:</span>{" "}
                <span className="font-medium">Bug</span>
              </div>
              <div>
                <span className="text-muted-foreground">Priority:</span>{" "}
                <span className="font-medium text-orange-600 dark:text-orange-400">
                  High
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Project:</span>{" "}
                <span className="font-medium">CXP Platform</span>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>{" "}
                <span className="font-medium">Open</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Would you like me to assign this to someone or add it to a sprint?
        </p>
      </div>
    ),
  },
  {
    role: "user",
    content:
      'Yes, assign it to Sarah Kim and add it to the current sprint. Also add labels "sso" and "authentication".',
    time: "2:16 PM",
  },
  {
    role: "assistant",
    agent: "Jira Agent",
    time: "2:16 PM",
    content: (
      <div className="space-y-3">
        <p>
          Done! I&apos;ve updated{" "}
          <span className="font-mono font-semibold text-primary">CXP-189</span>{" "}
          with the following changes:
        </p>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Assignee</strong> updated to{" "}
              <span className="font-medium">Sarah Kim</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Sprint</strong> set to{" "}
              <span className="font-medium">Q1 Sprint 9</span> (current)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>
              <strong>Labels</strong> added:{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-medium">
                sso
              </code>{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-medium">
                authentication
              </code>
            </span>
          </div>
        </div>
        <div className="rounded-lg border bg-secondary/50 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-primary">
              CXP-189
            </span>
            <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
              Bug
            </span>
            <span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900 dark:text-orange-300">
              High
            </span>
          </div>
          <p className="mb-1 text-sm font-medium">
            SSO Login Timeout - Page hangs for 30+ seconds
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <div>
              <span className="text-muted-foreground">Assignee:</span>{" "}
              <span className="font-medium">Sarah Kim</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sprint:</span>{" "}
              <span className="font-medium">Q1 Sprint 9</span>
            </div>
            <div>
              <span className="text-muted-foreground">Labels:</span>{" "}
              <span className="font-medium">sso, authentication</span>
            </div>
            <div>
              <span className="text-muted-foreground">Status:</span>{" "}
              <span className="font-medium">Open</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Sarah will be notified about this assignment. Is there anything else
          you&apos;d like to do with this ticket?
        </p>
      </div>
    ),
  },
  {
    role: "user",
    content:
      "Show me all open bugs in the current sprint with High priority or above.",
    time: "2:18 PM",
  },
  {
    role: "assistant",
    agent: "Jira Agent",
    time: "2:18 PM",
    content: (
      <div className="space-y-3">
        <p>
          Found <strong>4 open bugs</strong> with High+ priority in Q1 Sprint 9:
        </p>
        <div className="space-y-2">
          {[
            { id: "CXP-156", p: "Critical", title: "Fix dashboard loading performance", a: "Park Minjun" },
            { id: "CXP-189", p: "High", title: "SSO Login Timeout", a: "Sarah Kim" },
            { id: "CXP-142", p: "High", title: "OAuth2 token refresh flow broken", a: "Lee Jiwon" },
            { id: "CXP-178", p: "High", title: "Email sync fails for shared mailboxes", a: "Kim Sujin" },
          ].map((bug) => (
            <div
              key={bug.id}
              className="flex flex-wrap items-center gap-2 rounded-lg border bg-secondary/50 p-2.5"
            >
              <span className="font-mono text-xs font-bold text-primary">
                {bug.id}
              </span>
              <span
                className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                  bug.p === "Critical"
                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                }`}
              >
                {bug.p}
              </span>
              <span className="flex-1 text-xs font-medium">{bug.title}</span>
              <span className="text-xs text-muted-foreground">{bug.a}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Total: 4 bugs (1 Critical, 3 High). Would you like to see details on
          any of these?
        </p>
      </div>
    ),
  },
];

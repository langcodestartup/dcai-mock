export const projects = [
  { id: "proj-001", name: "CXP Platform" },
  { id: "proj-002", name: "Mobile App" },
  { id: "proj-003", name: "Data Pipeline" },
];

export const emails = [
  {
    id: 1,
    title: "Security Audit Findings - Immediate Action",
    from: "security-team@company.com",
    preview: "Our recent security scan identified 3 critical vulnerabilities...",
    content: `Hi Team,\n\nOur recent security scan identified 3 critical vulnerabilities in the newly deployed CXP dashboard module.\n\nKey issues:\n1. Improper authentication checks on the /api/admin/metrics endpoint.\n2. Potential cross-site scripting (XSS) in the new comment component.\n3. Outdated OpenSSL dependency in the backend container.\n\nPlease assign these to the critical queue and aim for a hotfix by end of day.\n\nBest,\nSecurity Team`,
    priority: "Critical" as const,
    status: "Unread" as const,
    date: "Feb 26, 2026",
  },
  {
    id: 2,
    title: "Q1 Sprint Review - Action Items Required",
    from: "sarah.kim@company.com",
    preview: "Please review the attached sprint summary and provide feedback...",
    content: `Hello everyone,\n\nThank you for attending the Q1 Sprint Review. Overall, we met 85% of our targeted deliverables.\n\nAction items for next week:\n- @David: Finalize the new OAuth2 flow documentation.\n- @Elena: Conduct the follow-up meeting with the marketing team regarding push notifications.\n- @All: Please review the attached sprint retrospective notes and add your comments by Friday.\n\nLet's keep up the great momentum!\n\nCheers,\nSarah`,
    priority: "High" as const,
    status: "Needs Reply" as const,
    date: "Feb 26, 2026",
  },
  {
    id: 3,
    title: "Data Migration Schedule Confirmation",
    from: "dba-team@company.com",
    preview: "Please confirm the migration window: March 1st 02:00-06:00 UTC...",
    content: `Hi Engineering Leads,\n\nWe are planning the final phase of the legacy database migration. The proposed downtime window is March 1st from 02:00 to 06:00 UTC.\n\nPlease reply to this email confirming that your services are prepared for this read-only window. If any critical batch jobs run during this time, let us know immediately so we can reschedule.\n\nThanks,\nDBA Team`,
    priority: "High" as const,
    status: "Unread" as const,
    date: "Feb 25, 2026",
  },
  {
    id: 4,
    title: "Infrastructure Cost Report - Feb 2026",
    from: "cloud-ops@company.com",
    preview: "Monthly infrastructure cost breakdown: Azure $12,450, AWS $3,200...",
    content: `Hi Finance and Leadership,\n\nOur infrastructure costs for February 2026 are as follows:\n\n- Azure: $12,450 (Up 5% due to new analytical workloads)\n- AWS: $3,200 (Stable)\n- GCP: $850 (Legacy systems)\n\nWe have identified a few idle staging environments that can be shut down over the weekend to save approximately $400/mo. We will proceed with the shutdown unless there are objections.\n\nRegards,\nCloud Ops`,
    priority: "Medium" as const,
    status: "Read" as const,
    date: "Feb 25, 2026",
  },
  {
    id: 5,
    title: "New Feature Request: Offline Mode",
    from: "product@company.com",
    preview: "Based on customer feedback, we would like to explore offline capabilities...",
    content: `Hi Dev Team,\n\nBased on recent customer feedback, especially from enterprise mobile users, offline support has become a high-priority request.\n\nWe need to explore the feasibility of caching the last 50 viewed tasks locally so users can modify them offline and sync back when the connection returns.\n\nLet's schedule a technical discovery meeting next week.\n\nThanks,\nProduct Management`,
    priority: "Low" as const,
    status: "Replied" as const,
    date: "Feb 24, 2026",
  },
];

export const tasks = [
  {
    id: "CXP-156",
    title: "Fix dashboard loading performance",
    content: `**Description:**\nThe dashboard currently takes over 4 seconds to load when a user has more than 50 active tasks. Profiling indicates that the frontend is rendering too many hidden DOM nodes.\n\n**Acceptance Criteria:**\n- Dashboard must load in under 1.5 seconds for users with up to 200 tasks.\n- Implement pagination or virtualization for the task list.\n- Ensure no layout shift occurs during data fetching.`,
    priority: "Critical" as const,
    status: "To Do" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-142",
    title: "Implement OAuth2 token refresh flow",
    content: `**Description:**\nOur current authentication tokens expire after 1 hour, causing users to be abruptly logged out even while actively using the platform. We need to implement a silent token refresh using the refresh token stored in the secure cookie.\n\n**Tasks:**\n- Implement Axios interceptor for 401 responses.\n- Pause outgoing requests while refreshing token.\n- Resume requests upon successful refresh.`,
    priority: "High" as const,
    status: "In Progress" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-160",
    title: "Add i18n support for Arabic locale",
    content: `**Description:**\nTo support our new EMEA clients, we need to introduce right-to-left (RTL) language support, starting with Arabic.\n\n**Requirements:**\n- Translate all static strings to Arabic.\n- Modify CSS to support RTL layouts (flex direction, padding swaps).\n- Test across Chrome and Safari.`,
    priority: "Medium" as const,
    status: "In Progress" as const,
    assignee: "Sarah Kim",
  },
  {
    id: "MOB-023",
    title: "Design push notification settings UI",
    content: `**Description:**\nUsers are complaining about too many push notifications. We need a granular settings screen allowing users to toggle notifications for:\n- Direct mentions\n- High priority task assignments\n- Daily summaries\n\n**Assets:** Figma link attached in the Jira ticket.`,
    priority: "Medium" as const,
    status: "To Do" as const,
    assignee: "Demo User",
  },
  {
    id: "DATA-089",
    title: "Optimize ETL pipeline for large datasets",
    content: `**Description:**\nThe nightly ETL jobs are starting to timeout on the legacy MySQL cluster. We need to migrate the complex JOIN queries to the new Snowflake warehouse.\n\n**Steps:**\n1. Replicate raw tables to Snowflake.\n2. Rewrite the dbt transformation models.\n3. Run data parity checks.\n4. Switch the API read endpoint.`,
    priority: "High" as const,
    status: "In Review" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-170",
    title: "Update API documentation for v2 endpoints",
    content: `**Description:**\nWe've released several new v2 endpoints, but the Swagger documentation is outdated.\n\n**Action:**\n- Update the OpenAPI spec yaml for /api/v2/workplace.\n- Add request/response examples for the new bulk-update endpoint.\n- Ensure the markdown matches our new branding guidelines.`,
    priority: "Low" as const,
    status: "To Do" as const,
    assignee: "Demo User",
  },
];

export const meetings = [
  {
    id: 1,
    title: "Daily Standup - CXP Team",
    time: "Today 9:00 AM - 9:15 AM",
    content: `Zoom Link: https://zoom.us/j/123456789\nPasscode: cxp-daily\n\n**Agenda:**\n- What did you do yesterday?\n- What are you doing today?\n- Are there any blockers?\n\n**Participants:**\n- Demo User\n- Sarah Kim\n- John Doe\n- Elena Rostova`,
    priority: "normal" as const,
  },
  {
    id: 2,
    title: "Sprint Planning - Q1 Week 9",
    time: "Today 2:00 PM - 3:30 PM",
    content: `Conference Room: Blue Sky\n\n**Agenda:**\n- Review Sprint 8 velocity and carryover.\n- Prioritize the backlog for Sprint 9.\n- Discuss testing strategy for the upcoming OAuth2 changes.\n\nPlease make sure your Jira tickets are updated with story points before the meeting.`,
    priority: "high" as const,
  },
  {
    id: 3,
    title: "Security Review - Audit Findings",
    time: "Tomorrow 10:00 AM - 11:00 AM",
    content: `Teams Link: Provided in calendar invite.\n\n**Agenda:**\n- Discuss the 3 critical vulnerabilities found in the latest scan.\n- Assign remediation owners.\n- Review timeframe for hotfix deployment.\n\nMandatory attendance for all Engineering Leads.`,
    priority: "critical" as const,
  },
  {
    id: 4,
    title: "Mobile App UX Review",
    time: "Tomorrow 3:00 PM - 4:00 PM",
    content: `Google Meet link attached.\n\n**Agenda:**\n- Review final Figma designs for the offline mode indicator.\n- Discuss the notification settings screen flow.\n- Gather feedback from QA regarding usability concerns.\n\nPlease review the Figma prototypes beforehand.`,
    priority: "normal" as const,
  },
];

export const urgentAlerts = [
  { type: "Email", text: "Security Audit Findings - Immediate Action Needed" },
  { type: "Email", text: "Q1 Sprint Review - Action Items Required" },
  { type: "Task", text: "CXP-156: Fix dashboard loading performance (Critical)" },
  { type: "Task", text: "CXP-142: Implement OAuth2 token refresh flow" },
  { type: "Meeting", text: "Sprint Planning - Q1 Week 9 (Today 2:00 PM)" },
];

export const chatAgents = [
  {
    id: "orchestrator",
    name: "Orchestration",
    description: "AI analyzes intent and delegates to the right agent automatically",
    color: "blue",
    badge: "Orchestrator",
  },
  {
    id: "email",
    name: "Email Agent",
    description: "Search, analyze, and draft email responses",
    color: "green",
    badge: "Email",
  },
  {
    id: "jira",
    name: "Task Agent",
    description: "Create, update, and manage Jira tasks",
    color: "indigo",
    badge: "Jira",
  },
  {
    id: "meeting",
    name: "Meeting Agent",
    description: "Prepare briefings and process meeting notes",
    color: "pink",
    badge: "Meeting",
  },
];

export const chatSessions = [
  { id: "orchestrator", title: "Summarize project status", agent: "orchestrator" },
  { id: "jira", title: "Create login bug ticket", agent: "jira" },
];

export const analyticsMetrics = [
  { label: "Total Projects", value: "12", change: "+8.3%" },
  { label: "Active Sessions", value: "1,247", change: "+12.5%" },
  { label: "AI Requests", value: "8,432", change: "+23.1%" },
];

export const settingsProjects = [
  {
    name: "CXP Platform",
    description: "Customer Experience Platform - Main Project",
    jiraKey: "CXP",
    created: "Jan 15, 2025",
  },
  {
    name: "Mobile App",
    description: "CXP Mobile Application",
    jiraKey: "MOB",
    created: "Jun 1, 2025",
  },
  {
    name: "Data Pipeline",
    description: "Data Processing & ETL Pipeline",
    jiraKey: "DATA",
    created: "Sep 1, 2025",
  },
];

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
    priority: "Critical" as const,
    status: "Unread" as const,
    date: "Feb 26, 2026",
  },
  {
    id: 2,
    title: "Q1 Sprint Review - Action Items Required",
    from: "sarah.kim@company.com",
    preview: "Please review the attached sprint summary and provide feedback...",
    priority: "High" as const,
    status: "Needs Reply" as const,
    date: "Feb 26, 2026",
  },
  {
    id: 3,
    title: "Data Migration Schedule Confirmation",
    from: "dba-team@company.com",
    preview: "Please confirm the migration window: March 1st 02:00-06:00 UTC...",
    priority: "High" as const,
    status: "Unread" as const,
    date: "Feb 25, 2026",
  },
  {
    id: 4,
    title: "Infrastructure Cost Report - Feb 2026",
    from: "cloud-ops@company.com",
    preview: "Monthly infrastructure cost breakdown: Azure $12,450, AWS $3,200...",
    priority: "Medium" as const,
    status: "Read" as const,
    date: "Feb 25, 2026",
  },
  {
    id: 5,
    title: "New Feature Request: Offline Mode",
    from: "product@company.com",
    preview: "Based on customer feedback, we would like to explore offline capabilities...",
    priority: "Low" as const,
    status: "Replied" as const,
    date: "Feb 24, 2026",
  },
];

export const tasks = [
  {
    id: "CXP-156",
    title: "Fix dashboard loading performance",
    priority: "Critical" as const,
    status: "To Do" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-142",
    title: "Implement OAuth2 token refresh flow",
    priority: "High" as const,
    status: "In Progress" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-160",
    title: "Add i18n support for Arabic locale",
    priority: "Medium" as const,
    status: "In Progress" as const,
    assignee: "Sarah Kim",
  },
  {
    id: "MOB-023",
    title: "Design push notification settings UI",
    priority: "Medium" as const,
    status: "To Do" as const,
    assignee: "Demo User",
  },
  {
    id: "DATA-089",
    title: "Optimize ETL pipeline for large datasets",
    priority: "High" as const,
    status: "In Review" as const,
    assignee: "Demo User",
  },
  {
    id: "CXP-170",
    title: "Update API documentation for v2 endpoints",
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
    priority: "normal" as const,
  },
  {
    id: 2,
    title: "Sprint Planning - Q1 Week 9",
    time: "Today 2:00 PM - 3:30 PM",
    priority: "high" as const,
  },
  {
    id: 3,
    title: "Security Review - Audit Findings",
    time: "Tomorrow 10:00 AM - 11:00 AM",
    priority: "critical" as const,
  },
  {
    id: 4,
    title: "Mobile App UX Review",
    time: "Tomorrow 3:00 PM - 4:00 PM",
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

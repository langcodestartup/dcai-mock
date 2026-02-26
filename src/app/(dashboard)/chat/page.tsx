"use client";

import Link from "next/link";
import {
  Clock,
  Mail,
  ClipboardCheck,
  Users,
  FileText,
  Calendar,
  MessageCircle,
} from "lucide-react";

const agents = [
  {
    id: "orchestrator",
    name: "Orchestration",
    description: "AI analyzes intent and delegates to the right agent automatically",
    icon: Clock,
    gradient: "from-blue-500 to-blue-600",
    badge: "Orchestrator",
    href: "/chat/orchestrator",
  },
  {
    id: "email",
    name: "Email Agent",
    description: "Search, analyze, and draft email responses",
    icon: Mail,
    gradient: "from-green-500 to-green-600",
    badge: "Email",
    href: null,
  },
  {
    id: "jira",
    name: "Task Agent",
    description: "Create, update, and manage Jira tasks",
    icon: ClipboardCheck,
    gradient: "from-indigo-500 to-indigo-600",
    badge: "Jira",
    href: "/chat/jira",
  },
  {
    id: "meeting",
    name: "Meeting Agent",
    description: "Prepare briefings and process meeting notes",
    icon: Users,
    gradient: "from-pink-500 to-pink-600",
    badge: "Meeting",
    href: null,
  },
  {
    id: "workflow",
    name: "Meeting Workflow",
    description: "End-to-end meeting management with notes",
    icon: FileText,
    gradient: "from-orange-500 to-orange-600",
    badge: null,
    href: null,
  },
  {
    id: "prep",
    name: "Meeting Prep",
    description: "Prepare for upcoming meetings with briefings",
    icon: Calendar,
    gradient: "from-cyan-500 to-cyan-600",
    badge: null,
    href: null,
  },
  {
    id: "llm",
    name: "Direct LLM",
    description: "Chat directly with the AI model without agents",
    icon: MessageCircle,
    gradient: "from-purple-500 to-purple-600",
    badge: null,
    href: null,
  },
];

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">AI Chat</h1>
        <p className="text-lg text-muted-foreground">
          Select a workflow to start a new conversation
        </p>
      </div>
      <div className="mb-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {agents.slice(0, 4).map((agent) => {
          const cardContent = (
            <>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
              />
              <div className="relative">
                <agent.icon className="mb-4 h-12 w-12 text-foreground/70" />
                <h3 className="mb-2 text-xl font-semibold">{agent.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {agent.description}
                </p>
              </div>
              {agent.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {agent.badge}
                </div>
              )}
            </>
          );
          const className = "group relative cursor-pointer overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg";
          return agent.href ? (
            <Link key={agent.id} href={agent.href} className={className}>
              {cardContent}
            </Link>
          ) : (
            <div key={agent.id} className={className}>
              {cardContent}
            </div>
          );
        })}
      </div>
      <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {agents.slice(4).map((agent) => (
          <div
            key={agent.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
            />
            <div className="relative">
              <agent.icon className="mb-4 h-12 w-12 text-foreground/70" />
              <h3 className="mb-2 text-xl font-semibold">{agent.name}</h3>
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

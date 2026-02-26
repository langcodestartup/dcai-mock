"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Clock, ClipboardCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  orchestratorMessages,
  jiraMessages,
  type ChatMessage,
} from "@/data/chat-messages";

const sessionConfig: Record<
  string,
  {
    title: string;
    agent: string;
    icon: typeof Clock;
    color: string;
    messages: ChatMessage[];
  }
> = {
  orchestrator: {
    title: "Summarize project status",
    agent: "Orchestrator",
    icon: Clock,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    messages: orchestratorMessages,
  },
  jira: {
    title: "Create login bug ticket",
    agent: "Jira",
    icon: ClipboardCheck,
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    messages: jiraMessages,
  },
};

export default function ChatSessionPage({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  const { session } = use(params);
  const config = sessionConfig[session];

  if (!config) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Session not found</p>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      {/* Chat Header */}
      <div className="flex shrink-0 items-center gap-3 border-b bg-background px-6 py-3">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/chat">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h2 className="text-sm font-semibold">{config.title}</h2>
        </div>
        <Badge variant="secondary" className={config.color}>
          <Icon className="mr-1.5 h-3.5 w-3.5" />
          {config.agent}
        </Badge>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {config.messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "user" ? (
              <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-primary-foreground">
                <p className="text-sm">{msg.content}</p>
                <p className="mt-1 text-xs opacity-70">{msg.time}</p>
              </div>
            ) : (
              <div className="max-w-[80%]">
                <div className="mb-1.5 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {msg.agent}
                    {msg.agentVia && (
                      <span className="text-muted-foreground/50">
                        {" "}
                        via {msg.agentVia}
                      </span>
                    )}
                  </span>
                </div>
                <div className="rounded-2xl rounded-tl-sm border bg-card px-4 py-3 text-sm">
                  {msg.content}
                </div>
                <p className="ml-9 mt-1 text-xs text-muted-foreground">
                  {msg.time}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="shrink-0 border-t bg-background p-4">
        <div className="mx-auto flex max-w-4xl items-end gap-3">
          <div className="flex-1 rounded-xl border bg-background px-4 py-3">
            <Textarea
              rows={1}
              placeholder="Type your message..."
              className="min-h-0 w-full resize-none border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
            />
          </div>
          <Button size="icon" className="shrink-0 rounded-xl">
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

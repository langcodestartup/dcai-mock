"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  MessageCircle,
  TrendingUp,
  Briefcase,
  Settings,
  Clock,
  ClipboardCheck,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { chatSessions, projects } from "@/data/mock-data";

const navItems = [
  { title: "Dashboard", href: "/", icon: LayoutGrid },
  { title: "Chat", href: "/chat", icon: MessageCircle },
  { title: "Analytics", href: "/analytics", icon: TrendingUp },
  { title: "Workplace", href: "/workplace", icon: Briefcase },
  { title: "Settings", href: "/settings", icon: Settings },
];

const agentIcons: Record<string, typeof Clock> = {
  orchestrator: Clock,
  jira: ClipboardCheck,
};

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">CXP</h1>
        </div>
        <select className="mt-2 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href)
                    }
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recent Sessions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatSessions.map((session) => {
                const Icon = agentIcons[session.agent] || MessageCircle;
                return (
                  <SidebarMenuItem key={session.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/chat/${session.id}`}
                    >
                      <Link href={`/chat/${session.id}`}>
                        <span className="flex-1 truncate text-left">
                          {session.title}
                        </span>
                        <span className="ml-1 shrink-0 rounded bg-primary/10 p-0.5">
                          <Icon className="h-3 w-3 text-primary" />
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <Link href="/profile" className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">
              D
            </AvatarFallback>
          </Avatar>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-medium">Demo User</p>
            <p className="truncate text-xs text-muted-foreground">
              demo@cxp.com
            </p>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}

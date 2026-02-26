"use client";

import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const breadcrumbMap: Record<string, string> = {
  "/": "Dashboard",
  "/chat": "Chat",
  "/analytics": "Analytics",
  "/workplace": "Workplace",
  "/settings": "Settings",
  "/profile": "Profile",
};

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const breadcrumb =
    breadcrumbMap[pathname] ||
    (pathname.startsWith("/chat/") ? "Chat" : "Dashboard");

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <span className="text-sm font-medium text-muted-foreground">
          {breadcrumb}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            router.push("/login");
          }}
        >
          <LogOut className="mr-1 h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}

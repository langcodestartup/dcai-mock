import {
  FolderOpen,
  Users,
  Monitor,
  Link2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { settingsProjects } from "@/data/mock-data";

const settingsTabs = [
  { label: "Projects", icon: FolderOpen, active: true },
  { label: "Users", icon: Users, active: false },
  { label: "LLM Providers", icon: Monitor, active: false },
  { label: "Jira Integration", icon: Link2, active: false },
  { label: "Email (EWS)", icon: Mail, active: false },
];

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            System administration and configuration
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Sidebar tabs */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {settingsTabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium ${
                    tab.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="mr-3 h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Manage your projects and their configurations
                  </p>
                  <Button>+ New Project</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {settingsProjects.map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/70">
                        Jira Key: {project.jiraKey} | Created: {project.created}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        Delete
                      </Button>
                    </div>
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

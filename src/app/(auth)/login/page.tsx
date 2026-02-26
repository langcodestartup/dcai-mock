"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-md space-y-8 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold">CXP</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          AI Agent-based Project Automation Platform
        </p>
      </div>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem("isAuthenticated", "true");
              router.push("/");
            }}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="demo@cxp.com"
                  placeholder="user@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  defaultValue="password123"
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

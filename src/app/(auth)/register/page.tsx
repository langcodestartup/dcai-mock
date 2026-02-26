"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md space-y-8 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold">CXP</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Create your account
        </p>
      </div>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
            <p className="text-xs text-muted-foreground">At least 6 characters</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign Up</Button>
        </CardContent>
      </Card>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

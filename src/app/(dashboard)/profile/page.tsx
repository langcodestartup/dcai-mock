import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary text-2xl text-primary-foreground">
              D
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Demo User</h1>
            <p className="text-muted-foreground">demo@cxp.com</p>
            <Badge className="mt-2" variant="secondary">
              Admin
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Profile Details */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Full Name</span>
              <span className="font-medium">Demo User</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">demo@cxp.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Role</span>
              <span className="font-medium">Admin</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Department</span>
              <span className="font-medium">Engineering</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Timezone</span>
              <span className="font-medium">Asia/Seoul (UTC+9)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Created</span>
              <span className="font-medium">Jan 1, 2025</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import { User, Mail, Hash, BookOpen, Calendar, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const profileCompletion = 75;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Profile updated successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
            <p className="text-muted-foreground">Manage your account information and preferences</p>
          </div>

          {/* Profile Completion */}
          <Card className="mb-6 bg-gradient-card backdrop-blur-sm border-2 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Profile Completion</h3>
                <span className="text-sm font-medium text-primary">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Complete your profile to unlock all features and get personalized recommendations
              </p>
            </CardContent>
          </Card>

          {/* Profile Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Avatar Section */}
            <Card className="lg:col-span-1 h-fit animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold shadow-glow">
                  JD
                </div>
                <Button variant="outline" size="sm">Change Photo</Button>
                <div className="text-center space-y-1">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">CS2021001</p>
                </div>
              </CardContent>
            </Card>

            {/* Form Section */}
            <Card className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          defaultValue="John Doe"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roll">Roll Number</Label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="roll"
                          defaultValue="CS2021001"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch</Label>
                      <Select defaultValue="cse">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cse">Computer Science</SelectItem>
                          <SelectItem value="ece">Electronics</SelectItem>
                          <SelectItem value="me">Mechanical</SelectItem>
                          <SelectItem value="ce">Civil</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Select defaultValue="5">
                          <SelectTrigger className="pl-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                              <SelectItem key={sem} value={String(sem)}>
                                Semester {sem}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subjects">Current Subjects</Label>
                      <div className="relative">
                        <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="subjects"
                          placeholder="DSA, DBMS, Networks..."
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90"
                    disabled={isLoading}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Settings */}
          <Card className="mt-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates about your activities</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <p className="font-medium">Privacy Settings</p>
                  <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/50">
                <div>
                  <p className="font-medium text-destructive">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account</p>
                </div>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;

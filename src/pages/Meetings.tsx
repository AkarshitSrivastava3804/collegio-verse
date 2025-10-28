import { useState } from "react";
import { Video, Plus, Link as LinkIcon, Clock, Users, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Meetings = () => {
  const [meetingCode, setMeetingCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleCreateMeeting = () => {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setGeneratedCode(code);
    toast.success("Meeting created successfully!");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast.success("Meeting code copied!");
  };

  const handleJoinMeeting = () => {
    if (meetingCode) {
      toast.success("Joining meeting...");
      // Here you would integrate with actual video meeting service
    }
  };

  const recentMeetings = [
    {
      title: "DSA Study Group",
      date: "Yesterday",
      duration: "45 min",
      participants: 5,
    },
    {
      title: "DBMS Project Discussion",
      date: "2 days ago",
      duration: "1 hr 20 min",
      participants: 8,
    },
    {
      title: "Networks Doubt Session",
      date: "1 week ago",
      duration: "30 min",
      participants: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Virtual Meetings</h1>
            <p className="text-lg text-muted-foreground">
              Connect and collaborate with your peers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Create Meeting */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Create New Meeting
                </CardTitle>
                <CardDescription>Start an instant meeting session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-gradient-hero rounded-lg text-center">
                  <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Start a meeting and share the code with others
                  </p>
                  <Button
                    onClick={handleCreateMeeting}
                    className="bg-gradient-primary hover:opacity-90"
                    size="lg"
                  >
                    Create Meeting
                  </Button>
                </div>

                {generatedCode && (
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg animate-fade-in">
                    <Label className="text-sm font-medium mb-2 block">Meeting Code</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        value={generatedCode}
                        readOnly
                        className="text-lg font-mono text-center"
                      />
                      <Button onClick={handleCopyCode} size="icon" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Share this code with participants
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Join Meeting */}
            <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Join Meeting
                </CardTitle>
                <CardDescription>Enter a meeting code to join</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meeting-code">Meeting Code</Label>
                    <Input
                      id="meeting-code"
                      placeholder="Enter code (e.g., ABC123XY)"
                      value={meetingCode}
                      onChange={(e) => setMeetingCode(e.target.value.toUpperCase())}
                      className="text-lg font-mono text-center"
                    />
                  </div>

                  <Button
                    onClick={handleJoinMeeting}
                    disabled={!meetingCode}
                    className="w-full bg-gradient-primary hover:opacity-90"
                    size="lg"
                  >
                    Join Meeting
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meeting-link">Meeting Link</Label>
                    <Input
                      id="meeting-link"
                      placeholder="Paste meeting link"
                      type="url"
                    />
                  </div>

                  <Button variant="outline" className="w-full" size="lg">
                    Join via Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Meetings */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Recent Meetings</CardTitle>
              <CardDescription>Your meeting history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMeetings.map((meeting, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Video className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{meeting.title}</h3>
                            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {meeting.duration}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {meeting.participants} participants
                              </span>
                              <span>•</span>
                              <span>{meeting.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Integration Info */}
          <Card className="mt-6 bg-gradient-card backdrop-blur-sm border-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Video Meeting Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    EduConnect supports integration with popular video meeting platforms. 
                    Create instant meetings with screen sharing, chat, and recording features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Meetings;

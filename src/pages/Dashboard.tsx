import { Link } from "react-router-dom";
import { BookOpen, Users, FileText, TrendingUp, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const stats = [
    {
      title: "Quizzes Taken",
      value: "24",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      change: "+3 this week",
    },
    {
      title: "Resources Shared",
      value: "12",
      icon: FileText,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      change: "+2 this week",
    },
    {
      title: "Meetings Joined",
      value: "8",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
      change: "+1 today",
    },
    {
      title: "Average Score",
      value: "85%",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
      change: "+5% improvement",
    },
  ];

  const recentActivity = [
    {
      title: "Completed DSA Quiz",
      time: "2 hours ago",
      score: "90%",
      icon: Award,
    },
    {
      title: "Joined DBMS Study Group",
      time: "5 hours ago",
      icon: Users,
    },
    {
      title: "Uploaded C++ Notes",
      time: "1 day ago",
      icon: FileText,
    },
  ];

  const subjects = [
    { name: "Data Structures", progress: 85, color: "bg-primary" },
    { name: "Database Management", progress: 70, color: "bg-secondary" },
    { name: "C++ Programming", progress: 92, color: "bg-accent" },
    { name: "Computer Networks", progress: 65, color: "bg-success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Here's your learning progress overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <Card className="lg:col-span-2 animate-fade-in">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Jump right into your learning activities</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/mcq">
                  <Button className="w-full h-24 flex flex-col gap-2 bg-gradient-primary hover:opacity-90">
                    <BookOpen className="h-6 w-6" />
                    <span>Start Quiz</span>
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                    <FileText className="h-6 w-6" />
                    <span>Share Notes</span>
                  </Button>
                </Link>
                <Link to="/meetings">
                  <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                    <Users className="h-6 w-6" />
                    <span>Join Meeting</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                    {activity.score && (
                      <span className="text-sm font-semibold text-success">{activity.score}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Subject Progress */}
          <Card className="mt-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
              <CardDescription>Track your mastery across different subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{subject.name}</span>
                    <span className="text-muted-foreground">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Profile Completion */}
          <Card className="mt-6 bg-gradient-card backdrop-blur-sm border-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">Complete Your Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add more details to unlock all features
                  </p>
                  <Progress value={75} className="w-64 h-2 mt-2" />
                </div>
                <Link to="/profile">
                  <Button variant="outline">
                    Update Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

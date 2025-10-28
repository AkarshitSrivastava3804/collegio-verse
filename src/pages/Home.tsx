import { Link } from "react-router-dom";
import { BookOpen, Users, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Practice MCQs",
      description: "Master your subjects with interactive quizzes and instant feedback",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Connect with peers through virtual meetings and study groups",
      color: "text-secondary",
    },
    {
      icon: Award,
      title: "Track Progress",
      description: "Monitor your performance with detailed analytics and insights",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Share Resources",
      description: "Access and contribute to a vast library of study materials",
      color: "text-success",
    },
  ];

  const benefits = [
    "Interactive quiz system with instant feedback",
    "Real-time collaboration tools",
    "Comprehensive resource library",
    "Performance tracking and analytics",
    "Mobile-friendly responsive design",
    "Secure and private platform",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                EduConnect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Learn. Collaborate. Grow.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your all-in-one platform for academic excellence. Practice MCQs, share resources, 
              collaborate with peers, and track your progress—all in one beautiful interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 shadow-glow">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`p-3 bg-gradient-hero rounded-lg w-fit ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Why Choose EduConnect?</h2>
              <p className="text-lg text-muted-foreground">
                Built by students, for students. We understand what you need to excel in your academic journey.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
              <Card className="relative bg-gradient-card backdrop-blur-sm border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-secondary">500+</div>
                      <div className="text-sm text-muted-foreground">Resources</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-accent">2000+</div>
                      <div className="text-sm text-muted-foreground">MCQs</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-success">95%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold">Ready to Transform Your Learning?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join thousands of students already using EduConnect to achieve their academic goals
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 mt-4">
              Join Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

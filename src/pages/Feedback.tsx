import { Link, useLocation } from "react-router-dom";
import { Award, TrendingUp, XCircle, CheckCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Feedback = () => {
  const location = useLocation();
  const { answers = [], questions = [], subject = "Unknown" } = location.state || {};
  
  const correctCount = answers.filter((ans: string, i: number) => ans === questions[i]?.correct).length;
  const wrongCount = answers.length - correctCount;
  const scorePercentage = Math.round((correctCount / answers.length) * 100);

  const getMotivationalMessage = () => {
    if (scorePercentage >= 90) return "Outstanding! You're mastering this subject! 🌟";
    if (scorePercentage >= 75) return "Great job! Keep up the excellent work! 💪";
    if (scorePercentage >= 60) return "Good effort! A bit more practice will perfect it! 📚";
    return "Don't worry! Every mistake is a learning opportunity! 🎯";
  };

  const getFeedbackText = () => {
    if (scorePercentage < 60) return `Focus on improving your understanding of ${subject}. Review the concepts and practice more questions.`;
    if (scorePercentage < 75) return `You're doing well! Work on strengthening weak areas in ${subject}.`;
    return `Excellent performance! You have a strong grasp of ${subject} concepts.`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Score Card */}
          <Card className="mb-8 bg-gradient-card backdrop-blur-sm border-2 shadow-lg animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-block p-4 bg-gradient-primary rounded-full mb-4 animate-pulse-glow">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
                <p className="text-lg text-muted-foreground">{getMotivationalMessage()}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                  <p className="text-5xl font-bold text-primary">{scorePercentage}%</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Correct</p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <p className="text-5xl font-bold text-success">{correctCount}</p>
                  </div>
                </div>
                <div className="p-6 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Wrong</p>
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="h-6 w-6 text-destructive" />
                    <p className="text-5xl font-bold text-destructive">{wrongCount}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Performance</span>
                  <span className="text-muted-foreground">{scorePercentage}%</span>
                </div>
                <Progress value={scorePercentage} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Feedback & Analysis */}
          <Card className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Detailed Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Analysis</h3>
                <p className="text-muted-foreground">{getFeedbackText()}</p>
              </div>

              {/* Question Review */}
              <div className="space-y-4">
                <h3 className="font-semibold">Question Review</h3>
                {questions.map((q: any, index: number) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      answers[index] === q.correct
                        ? "border-success/50 bg-success/5"
                        : "border-destructive/50 bg-destructive/5"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {answers[index] === q.correct ? (
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium mb-1">Q{index + 1}: {q.question}</p>
                        <p className="text-sm">
                          <span className="text-muted-foreground">Your answer: </span>
                          <span className={answers[index] === q.correct ? "text-success" : "text-destructive"}>
                            {answers[index]}
                          </span>
                        </p>
                        {answers[index] !== q.correct && (
                          <p className="text-sm mt-1">
                            <span className="text-muted-foreground">Correct answer: </span>
                            <span className="text-success font-medium">{q.correct}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to="/mcq" className="flex-1">
              <Button variant="outline" className="w-full" size="lg">
                <RotateCcw className="mr-2 h-5 w-5" />
                Retry Quiz
              </Button>
            </Link>
            <Link to="/dashboard" className="flex-1">
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;

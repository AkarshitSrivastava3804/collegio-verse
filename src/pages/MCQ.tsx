import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, Award, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MCQ = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: "O(log n)",
    },
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      correct: "Stack",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "System Query Language",
        "Standard Query Language",
      ],
      correct: "Structured Query Language",
    },
  ];

  const handleStartQuiz = () => {
    if (selectedSubject) {
      setQuizStarted(true);
    }
  };

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers([...answers, selectedAnswer]);
      setSelectedAnswer("");
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/feedback", { 
          state: { 
            answers,
            questions,
            subject: selectedSubject 
          } 
        });
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">MCQ Practice</h1>
              <p className="text-lg text-muted-foreground">
                Test your knowledge with interactive quizzes
              </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Start a New Quiz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Select Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                      <SelectItem value="dbms">Database Management</SelectItem>
                      <SelectItem value="cpp">C++ Programming</SelectItem>
                      <SelectItem value="networks">Computer Networks</SelectItem>
                      <SelectItem value="os">Operating Systems</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Questions</p>
                    <p className="text-xl font-bold">15</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-secondary" />
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-xl font-bold">20 min</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Award className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Points</p>
                    <p className="text-xl font-bold">100</p>
                  </div>
                </div>

                <Button
                  onClick={handleStartQuiz}
                  disabled={!selectedSubject}
                  className="w-full bg-gradient-primary hover:opacity-90"
                  size="lg"
                >
                  Start Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent Quizzes */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold mb-6">Recent Quizzes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { subject: "DSA", score: 90, date: "2 days ago" },
                  { subject: "DBMS", score: 85, date: "5 days ago" },
                  { subject: "Networks", score: 78, date: "1 week ago" },
                ].map((quiz, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{quiz.subject}</p>
                          <p className="text-sm text-muted-foreground">{quiz.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-success">{quiz.score}%</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary ${
                      selectedAnswer === option
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                    onClick={() => setSelectedAnswer(option)}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                    {selectedAnswer === option && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "Submit Quiz"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MCQ;

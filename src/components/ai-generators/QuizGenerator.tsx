
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlaskConical, Loader2 } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  type: "multiple-choice" | "true-false";
}

interface GeneratedQuiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [sourceContent, setSourceContent] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("10");
  const [questionType, setQuestionType] = useState("multiple-choice");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<GeneratedQuiz | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | boolean | null)[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleGenerateQuiz = () => {
    setIsGenerating(true);
    
    // Simulate quiz generation (in a real app, this would call your AI backend)
    setTimeout(() => {
      const mockedQuiz: GeneratedQuiz = {
        title: `${topic} Knowledge Check`,
        description: `Test your knowledge of ${topic} with this AI-generated quiz.`,
        questions: Array.from({ length: parseInt(numberOfQuestions) }, (_, i) => {
          if (questionType === "true-false") {
            return {
              id: i + 1,
              question: `Sample true/false question ${i + 1} about ${topic}?`,
              options: ["True", "False"],
              correctAnswer: Math.random() > 0.5 ? 0 : 1,
              type: "true-false" as const
            };
          } else {
            return {
              id: i + 1,
              question: `Sample question ${i + 1} about ${topic}?`,
              options: [
                "Sample option A",
                "Sample option B",
                "Sample option C",
                "Sample option D"
              ],
              correctAnswer: Math.floor(Math.random() * 4),
              type: "multiple-choice" as const
            };
          }
        })
      };
      
      setGeneratedQuiz(mockedQuiz);
      setUserAnswers(Array(parseInt(numberOfQuestions)).fill(null));
      setIsGenerating(false);
    }, 2000);
  };

  const handleAnswerSelect = (answer: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentStep] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentStep < parseInt(numberOfQuestions) - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitQuiz = () => {
    if (!generatedQuiz) return;
    
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === generatedQuiz.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setGeneratedQuiz(null);
    setCurrentStep(0);
    setUserAnswers([]);
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="space-y-6">
      {!generatedQuiz ? (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-brand-purple p-2 rounded-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <CardTitle>AI Quiz Generator</CardTitle>
            </div>
            <CardDescription>
              Create interactive quizzes to test your knowledge
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Quiz Topic</label>
              <Input 
                placeholder="e.g., JavaScript Basics, Organic Chemistry, World History" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Source Material (Optional)</label>
              <Textarea 
                placeholder="Paste content from which the quiz should be generated, or leave blank to use AI knowledge"
                className="min-h-[100px]"
                value={sourceContent}
                onChange={(e) => setSourceContent(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Number of Questions</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(e.target.value)}
                >
                  <option value="5">5 Questions</option>
                  <option value="10">10 Questions</option>
                  <option value="15">15 Questions</option>
                  <option value="20">20 Questions</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Question Types</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="true-false">True/False</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={handleGenerateQuiz}
              disabled={!topic.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Quiz...
                </>
              ) : (
                "Generate Quiz"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : quizSubmitted ? (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>
              You scored {score} out of {generatedQuiz.questions.length} questions correctly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-6xl font-bold mb-4">
                {Math.round((score / generatedQuiz.questions.length) * 100)}%
              </div>
              <p className="text-muted-foreground">
                {score === generatedQuiz.questions.length 
                  ? "Perfect! You've mastered this topic." 
                  : score >= generatedQuiz.questions.length * 0.7 
                    ? "Great job! You have a good understanding of the material."
                    : "Keep studying! Review the questions you missed to improve your knowledge."}
              </p>
            </div>
            
            <div className="space-y-6 mt-8">
              <h3 className="font-semibold text-lg">Question Review</h3>
              {generatedQuiz.questions.map((question, index) => (
                <div 
                  key={question.id} 
                  className={`border rounded-lg p-4 ${
                    userAnswers[index] === question.correctAnswer 
                      ? "bg-green-50 border-green-200" 
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <p className="font-medium mb-2">
                    {question.id}. {question.question}
                  </p>
                  
                  {question.options && (
                    <div className="space-y-1 ml-4">
                      {question.options.map((option, optIndex) => (
                        <div 
                          key={optIndex} 
                          className={`flex items-center gap-2 ${
                            optIndex === question.correctAnswer 
                              ? "text-green-700 font-medium" 
                              : optIndex === userAnswers[index] 
                                ? "text-red-700 line-through" 
                                : ""
                          }`}
                        >
                          <div className={`h-4 w-4 rounded-full flex items-center justify-center text-xs ${
                            optIndex === question.correctAnswer 
                              ? "bg-green-100 border border-green-500" 
                              : optIndex === userAnswers[index] 
                                ? "bg-red-100 border border-red-500" 
                                : "border border-gray-300"
                          }`}>
                            {optIndex === question.correctAnswer && "✓"}
                            {optIndex === userAnswers[index] && optIndex !== question.correctAnswer && "✗"}
                          </div>
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={resetQuiz}>
              Create Another Quiz
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{generatedQuiz.title}</CardTitle>
            <CardDescription>{generatedQuiz.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                Question {currentStep + 1} of {generatedQuiz.questions.length}
              </div>
              <div className="text-sm font-medium">
                Progress: {Math.round(((currentStep + 1) / generatedQuiz.questions.length) * 100)}%
              </div>
            </div>
            
            <div className="h-2 w-full bg-muted rounded mb-8">
              <div 
                className="h-full bg-brand-purple rounded"
                style={{ width: `${((currentStep + 1) / generatedQuiz.questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                {generatedQuiz.questions[currentStep].question}
              </h3>
              
              <div className="space-y-3">
                {generatedQuiz.questions[currentStep].options?.map((option, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      userAnswers[currentStep] === index 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "hover:bg-muted"
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                        userAnswers[currentStep] === index 
                          ? "bg-primary-foreground border-primary-foreground text-primary" 
                          : "border-gray-300"
                      }`}>
                        {userAnswers[currentStep] === index && "✓"}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            {currentStep < generatedQuiz.questions.length - 1 ? (
              <Button 
                onClick={handleNextQuestion}
                disabled={userAnswers[currentStep] === null}
              >
                Next
              </Button>
            ) : (
              <Button 
                onClick={handleSubmitQuiz}
                disabled={userAnswers.some(answer => answer === null)}
              >
                Submit Quiz
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

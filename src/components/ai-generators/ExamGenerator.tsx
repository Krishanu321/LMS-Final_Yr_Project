
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Loader2 } from "lucide-react";

interface ExamQuestion {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  type: "multiple-choice" | "short-answer";
}

interface GeneratedExam {
  title: string;
  description: string;
  questions: ExamQuestion[];
}

export function ExamGenerator() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questionType, setQuestionType] = useState("mixed");
  const [numberOfQuestions, setNumberOfQuestions] = useState("10");
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedExam, setGeneratedExam] = useState<GeneratedExam | null>(null);

  const handleGenerateExam = () => {
    setIsGenerating(true);
    
    // Simulate exam generation (in a real app, this would call your AI backend)
    setTimeout(() => {
      const mockedExam: GeneratedExam = {
        title: `${topic} Assessment`,
        description: `This is an AI-generated exam for ${topic} at ${difficulty} difficulty level.`,
        questions: Array.from({ length: parseInt(numberOfQuestions) }, (_, i) => ({
          id: i + 1,
          question: `Sample question ${i + 1} about ${topic}?`,
          options: questionType !== "short-answer" ? [
            "Sample option A",
            "Sample option B",
            "Sample option C",
            "Sample option D"
          ] : undefined,
          correctAnswer: questionType !== "short-answer" ? 0 : "Sample answer for short answer question",
          explanation: "This is an explanation of the correct answer and why it's right.",
          type: questionType === "short-answer" ? "short-answer" : "multiple-choice"
        }))
      };
      
      setGeneratedExam(mockedExam);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownloadExam = () => {
    if (!generatedExam) return;
    
    // In a real app, you would generate a PDF or formatted document
    alert("In a complete implementation, this would download the exam as a PDF.");
  };

  const handleSaveExam = () => {
    if (!generatedExam) return;
    
    // In a real app, you would save this to your database
    alert("In a complete implementation, this would save the exam to your database.");
  };

  const resetForm = () => {
    setGeneratedExam(null);
  };

  return (
    <div className="space-y-6">
      {!generatedExam ? (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-brand-blue p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle>AI Exam Generator</CardTitle>
            </div>
            <CardDescription>
              Create customized exams and assessments with AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Exam Topic</label>
              <Input 
                placeholder="e.g., React Fundamentals, Data Structures, Machine Learning" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Difficulty Level</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="mixed">Mixed Difficulty</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Question Type</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option value="multiple-choice">Multiple Choice Only</option>
                  <option value="short-answer">Short Answer Only</option>
                  <option value="mixed">Mixed Question Types</option>
                </select>
              </div>
            </div>
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
                <option value="30">30 Questions</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Additional Instructions (Optional)</label>
              <Textarea 
                placeholder="Any specific topics to focus on or additional requirements for the exam"
                value={additionalInstructions}
                onChange={(e) => setAdditionalInstructions(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={handleGenerateExam}
              disabled={!topic.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Exam...
                </>
              ) : (
                "Generate Exam"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{generatedExam.title}</CardTitle>
            <CardDescription>{generatedExam.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {generatedExam.questions.map((question) => (
              <div key={question.id} className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium">Question {question.id}: {question.question}</h3>
                
                {question.type === "multiple-choice" && question.options && (
                  <div className="space-y-2 pl-4">
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                            index === (question.correctAnswer as number) 
                              ? "bg-green-100 border-green-500 text-green-500" 
                              : "border-gray-300"
                          }`}
                        >
                          {index === (question.correctAnswer as number) && "✓"}
                        </div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {question.type === "short-answer" && (
                  <div className="pl-4">
                    <p className="text-sm font-medium mb-1">Sample Answer:</p>
                    <p className="text-sm p-2 bg-muted rounded">{question.correctAnswer}</p>
                  </div>
                )}
                
                <div className="bg-muted p-3 rounded text-sm">
                  <p className="font-medium">Explanation:</p>
                  <p>{question.explanation}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button variant="outline" className="w-full sm:w-auto" onClick={resetForm}>
              Create Another Exam
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleDownloadExam}>
              Download as PDF
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleSaveExam}>
              Save to My Materials
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

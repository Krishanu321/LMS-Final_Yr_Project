
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, BookText, FileText, FlaskConical, Lightbulb, Send, Clock, Brain, MessageSquare } from "lucide-react";

export default function AIAssistant() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hi there! I'm your AI study assistant. How can I help you today?" }
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    
    // Add user message to chat
    setChatMessages([...chatMessages, { role: "user", content: userMessage }]);
    
    // Simulate AI response (in a real app, this would be an API call)
    setIsGenerating(true);
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: "I'm simulating a response to your message. In a real implementation, this would call an AI API to generate a helpful response to your query." 
        }
      ]);
      setIsGenerating(false);
    }, 1500);
    
    setUserMessage("");
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">AI Learning Assistant</h1>
            <p className="text-muted-foreground">Enhance your learning with AI-powered tools</p>
          </div>
        </div>

        <Tabs defaultValue="chat" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="exam-prep">Exam Prep</TabsTrigger>
            <TabsTrigger value="notes">Notes Generator</TabsTrigger>
            <TabsTrigger value="quiz">Quiz Generator</TabsTrigger>
            <TabsTrigger value="summary">Text Summarizer</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-4">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-brand-purple" />
                  Study Assistant Chat
                </CardTitle>
                <CardDescription>
                  Ask questions, get explanations, and receive study guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4 border rounded-md">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse"></div>
                        <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse delay-150"></div>
                        <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Ask anything about your studies..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} disabled={isGenerating}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="exam-prep">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-brand-blue" />
                  AI Exam Prep Generator
                </CardTitle>
                <CardDescription>
                  Create customized exam preparation materials based on your topic
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject/Course</label>
                  <Input placeholder="e.g., Computer Science, Mathematics, Biology" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Specific Topics</label>
                  <Textarea 
                    placeholder="List the specific topics you want to focus on" 
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Difficulty Level</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Material Type</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="practice-questions">Practice Questions</option>
                      <option value="flashcards">Flashcards</option>
                      <option value="summary-notes">Summary Notes</option>
                      <option value="full-mock-exam">Full Mock Exam</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Exam Prep Materials</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookText className="mr-2 h-5 w-5 text-brand-pink" />
                  Notes Generator
                </CardTitle>
                <CardDescription>
                  Turn your lecture content or textbook chapters into organized study notes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Input Content</label>
                  <Textarea 
                    placeholder="Paste lecture material, textbook content, or any learning material you want to convert into notes" 
                    className="min-h-[200px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Note Format</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="outline">Outline Format</option>
                      <option value="cornell">Cornell Method</option>
                      <option value="mind-map">Mind Map Structure</option>
                      <option value="summary">Concise Summary</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Focus Areas</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="key-concepts">Key Concepts</option>
                      <option value="definitions">Definitions & Terminology</option>
                      <option value="examples">Examples & Applications</option>
                      <option value="comprehensive">Comprehensive Coverage</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Study Notes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="quiz">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                  Quiz Generator
                </CardTitle>
                <CardDescription>
                  Create practice quizzes to test your knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Quiz Topic</label>
                  <Input placeholder="e.g., JavaScript Basics, Organic Chemistry, World History" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Study Material (Optional)</label>
                  <Textarea 
                    placeholder="Paste content from which the quiz should be generated, or leave blank to use AI knowledge" 
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Number of Questions</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="5">5 Questions</option>
                      <option value="10">10 Questions</option>
                      <option value="15">15 Questions</option>
                      <option value="20">20 Questions</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Question Types</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="multiple-choice">Multiple Choice</option>
                      <option value="true-false">True/False</option>
                      <option value="short-answer">Short Answer</option>
                      <option value="mixed">Mixed Question Types</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Quiz</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="summary">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-brand-blue" />
                  Text Summarizer
                </CardTitle>
                <CardDescription>
                  Condense complex learning materials into concise summaries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Text to Summarize</label>
                  <Textarea 
                    placeholder="Paste the text you want to summarize" 
                    className="min-h-[200px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Summary Length</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="short">Short - Key Points Only</option>
                      <option value="medium">Medium - Main Concepts</option>
                      <option value="detailed">Detailed - Comprehensive</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Focus On</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="main-ideas">Main Ideas</option>
                      <option value="examples">Examples & Applications</option>
                      <option value="terminology">Key Terms & Definitions</option>
                      <option value="balanced">Balanced Coverage</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Summary</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-brand-blue" />
                Study Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get homework help, explanations, and study guidance from AI
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BookText className="mr-2 h-5 w-5 text-brand-purple" />
                Content Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create study notes, flashcards, and summaries automatically
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FlaskConical className="mr-2 h-5 w-5 text-brand-pink" />
                Knowledge Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Generate practice questions and quizzes to test your understanding
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5 text-emerald-500" />
                Time Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Focus your study time on what matters most with AI guidance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

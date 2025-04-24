
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExamGenerator } from "@/components/ai-generators/ExamGenerator";
import { NotesGenerator } from "@/components/ai-generators/NotesGenerator";
import { QuizGenerator } from "@/components/ai-generators/QuizGenerator";
import { BookOpen, FileText, FlaskConical, Lightbulb } from "lucide-react";

export default function ExamPrep() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">AI-Powered Exam Prep</h1>
          <p className="text-muted-foreground">
            Generate personalized study materials to help you prepare for exams
          </p>
        </div>

        <Tabs defaultValue="exams" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exams">
              <FileText className="mr-2 h-4 w-4" />
              Exam Generator
            </TabsTrigger>
            <TabsTrigger value="notes">
              <BookOpen className="mr-2 h-4 w-4" />
              Notes Generator
            </TabsTrigger>
            <TabsTrigger value="quizzes">
              <FlaskConical className="mr-2 h-4 w-4" />
              Quiz Generator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exams">
            <div className="space-y-8">
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <ExamGenerator />
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                        Exam Generator Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-1">Be Specific</h3>
                        <p className="text-sm text-muted-foreground">
                          Provide a specific topic to get more relevant exam questions.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Mix Question Types</h3>
                        <p className="text-sm text-muted-foreground">
                          Using different question formats helps test different kinds of knowledge.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Add Instructions</h3>
                        <p className="text-sm text-muted-foreground">
                          Use the additional instructions field to focus on specific subtopics or concepts.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Adjust Difficulty</h3>
                        <p className="text-sm text-muted-foreground">
                          Start with easier exams and gradually increase the difficulty as you learn.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <div className="space-y-8">
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <NotesGenerator />
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                        Notes Generator Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-1">Source Content</h3>
                        <p className="text-sm text-muted-foreground">
                          For more accurate notes, paste lecture content or textbook excerpts in the source content field.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Choose the Right Format</h3>
                        <p className="text-sm text-muted-foreground">
                          Different note formats work better for different subjects. Experiment to find what works for you.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Focus on Key Concepts</h3>
                        <p className="text-sm text-muted-foreground">
                          For initial learning, focus on key concepts. For review, choose comprehensive coverage.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Customize and Edit</h3>
                        <p className="text-sm text-muted-foreground">
                          After generating notes, review and personalize them for better retention.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quizzes">
            <div className="space-y-8">
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <QuizGenerator />
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                        Quiz Generator Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-1">Test Frequently</h3>
                        <p className="text-sm text-muted-foreground">
                          Quizzing yourself regularly is one of the most effective study techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Focus on Weak Areas</h3>
                        <p className="text-sm text-muted-foreground">
                          Generate quizzes specifically for topics you're struggling with.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Use Source Material</h3>
                        <p className="text-sm text-muted-foreground">
                          For exam preparation, paste your study notes to create relevant practice questions.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Review Missed Questions</h3>
                        <p className="text-sm text-muted-foreground">
                          Pay special attention to questions you answered incorrectly and understand why.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

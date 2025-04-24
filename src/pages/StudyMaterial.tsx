
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookText, Search, Filter, Plus, Clock, FileText, FlaskConical, BookOpen, AlignLeft } from "lucide-react";

const studyMaterials = [
  {
    id: 1,
    title: "Computer Science Fundamentals",
    type: "Notes",
    subject: "Computer Science",
    lastUpdated: "3 days ago",
    pages: 12,
  },
  {
    id: 2,
    title: "Data Structures Flashcards",
    type: "Flashcards",
    subject: "Computer Science",
    lastUpdated: "1 week ago",
    cards: 48,
  },
  {
    id: 3,
    title: "JavaScript Basics Quiz",
    type: "Quiz",
    subject: "Web Development",
    lastUpdated: "2 days ago",
    questions: 15,
  },
  {
    id: 4,
    title: "Database Theory Summary",
    type: "Summary",
    subject: "Database Systems",
    lastUpdated: "5 days ago",
    pages: 5,
  },
  {
    id: 5,
    title: "React Components Notes",
    type: "Notes",
    subject: "Web Development",
    lastUpdated: "1 day ago",
    pages: 8,
  },
];

const aiGeneratedMaterials = [
  {
    id: 6,
    title: "Machine Learning Concepts",
    type: "Notes",
    subject: "AI & Machine Learning",
    lastUpdated: "2 days ago",
    pages: 10,
    aiGenerated: true,
  },
  {
    id: 7,
    title: "Python Programming Practice",
    type: "Quiz",
    subject: "Programming",
    lastUpdated: "3 days ago",
    questions: 20,
    aiGenerated: true,
  },
  {
    id: 8,
    title: "Cloud Computing Overview",
    type: "Summary",
    subject: "Cloud Technologies",
    lastUpdated: "1 week ago",
    pages: 6,
    aiGenerated: true,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Notes":
      return <BookText className="h-5 w-5 text-brand-blue" />;
    case "Flashcards":
      return <FileText className="h-5 w-5 text-brand-purple" />;
    case "Quiz":
      return <FlaskConical className="h-5 w-5 text-brand-pink" />;
    case "Summary":
      return <AlignLeft className="h-5 w-5 text-emerald-500" />;
    default:
      return <BookOpen className="h-5 w-5 text-brand-blue" />;
  }
};

export default function StudyMaterial() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Study Materials</h1>
            <p className="text-muted-foreground">Organize and access your learning resources</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Material
            </Button>
            <Button variant="outline">
              <FlaskConical className="mr-2 h-4 w-4" />
              AI Generate
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search materials..."
              className="pl-8 w-full"
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList>
            <TabsTrigger value="all">All Materials</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studyMaterials.map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(material.type)}
                        <CardTitle>{material.title}</CardTitle>
                      </div>
                      <div className="bg-muted text-xs px-2 py-1 rounded-full">
                        {material.type}
                      </div>
                    </div>
                    <CardDescription>
                      {material.subject}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last updated</span>
                      <span className="font-medium">{material.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {material.pages ? "Pages" : material.cards ? "Cards" : "Questions"}
                      </span>
                      <span className="font-medium">
                        {material.pages || material.cards || material.questions}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Material</Button>
                  </CardFooter>
                </Card>
              ))}

              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Create New Material</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Add notes, flashcards, quizzes, or summaries
                </p>
                <Button>Create Material</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studyMaterials.filter(m => m.type === "Notes").map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(material.type)}
                        <CardTitle>{material.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>
                      {material.subject}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last updated</span>
                      <span className="font-medium">{material.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pages</span>
                      <span className="font-medium">{material.pages}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Notes</Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Add New Notes</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Create study notes manually or with AI
                </p>
                <Button>Create Notes</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="flashcards">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studyMaterials.filter(m => m.type === "Flashcards").map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(material.type)}
                        <CardTitle>{material.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>
                      {material.subject}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last updated</span>
                      <span className="font-medium">{material.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Cards</span>
                      <span className="font-medium">{material.cards}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Study Flashcards</Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Create Flashcards</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Create a new flashcard deck manually or with AI
                </p>
                <Button>Create Flashcards</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quizzes">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studyMaterials.filter(m => m.type === "Quiz").map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(material.type)}
                        <CardTitle>{material.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>
                      {material.subject}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last updated</span>
                      <span className="font-medium">{material.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Questions</span>
                      <span className="font-medium">{material.questions}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Take Quiz</Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Create Quiz</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Create a new quiz manually or with AI
                </p>
                <Button>Create Quiz</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-generated">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">AI-Generated Study Materials</h2>
                <p className="text-muted-foreground mb-4">
                  Study materials automatically created by AI based on your courses
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aiGeneratedMaterials.map((material) => (
                  <Card key={material.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(material.type)}
                          <CardTitle>{material.title}</CardTitle>
                        </div>
                        <div className="bg-brand-purple text-white text-xs px-2 py-1 rounded-full">
                          AI Generated
                        </div>
                      </div>
                      <CardDescription>
                        {material.subject}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Generated</span>
                        <span className="font-medium">{material.lastUpdated}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {material.pages ? "Pages" : "Questions"}
                        </span>
                        <span className="font-medium">
                          {material.pages || material.questions}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Material</Button>
                    </CardFooter>
                  </Card>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle>Generate New Study Material</CardTitle>
                    <CardDescription>
                      Use AI to create customized study materials
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Subject/Topic</label>
                      <Input placeholder="e.g., Web Development, Data Structures, Machine Learning" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Material Type</label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="notes">Study Notes</option>
                        <option value="flashcards">Flashcards</option>
                        <option value="quiz">Practice Quiz</option>
                        <option value="summary">Topic Summary</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Generate with AI</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

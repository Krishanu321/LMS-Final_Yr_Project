
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, Plus, BookText, FlaskConical, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    progress: 75,
    chapters: 12,
    totalChapters: 16,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    progress: 45,
    chapters: 8,
    totalChapters: 18,
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    progress: 30,
    chapters: 6,
    totalChapters: 20,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  }
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Continue your learning journey where you left off.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Course
            </Button>
            <Button variant="outline">
              <FlaskConical className="mr-2 h-4 w-4" />
              AI Generate
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
            <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28.5h</div>
                  <p className="text-xs text-muted-foreground">
                    +4.5h from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Chapters</CardTitle>
                  <BookText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">26</div>
                  <p className="text-xs text-muted-foreground">
                    +8 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">
                    Earned 2 new badges
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Continue Learning</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div 
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.chapters} of {course.totalChapters} chapters completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <Button className="w-full mt-4">Continue</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI-Powered Learning Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-purple p-2 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>AI Course Generator</CardTitle>
                  </div>
                  <CardDescription>
                    Create customized course outlines based on your learning goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Generate Course</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-pink p-2 rounded-lg">
                      <BookText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Study Notes Generator</CardTitle>
                  </div>
                  <CardDescription>
                    Create comprehensive notes from any learning material
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Notes</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-blue p-2 rounded-lg">
                      <FlaskConical className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Practice Quiz Generator</CardTitle>
                  </div>
                  <CardDescription>
                    Generate smart quizzes to test your knowledge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Quiz</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div 
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.chapters} of {course.totalChapters} chapters completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <Button className="w-full mt-4">Continue</Button>
                  </CardContent>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Add New Course</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Create a new course or import from existing materials
                </p>
                <Button>Add Course</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="materials">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your Study Materials</h2>
              <p className="text-muted-foreground">
                Access your notes, flashcards, and other study materials
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notes</CardTitle>
                    <CardDescription>Access your study notes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>View Notes</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Flashcards</CardTitle>
                    <CardDescription>Practice with flashcards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>View Flashcards</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quizzes</CardTitle>
                    <CardDescription>Test your knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>View Quizzes</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>AI Generated</CardTitle>
                    <CardDescription>AI created materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>View AI Content</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-tools">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">AI Learning Tools</h2>
                <p className="text-muted-foreground">
                  Use AI to enhance your learning experience and generate study materials
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-purple p-2 rounded-lg">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>AI Course Generator</CardTitle>
                    </div>
                    <CardDescription>
                      Create customized course outlines based on your learning goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Generate Course</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-pink p-2 rounded-lg">
                        <BookText className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Study Notes Generator</CardTitle>
                    </div>
                    <CardDescription>
                      Create comprehensive notes from any learning material
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Create Notes</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-blue p-2 rounded-lg">
                        <FlaskConical className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Practice Quiz Generator</CardTitle>
                    </div>
                    <CardDescription>
                      Generate smart quizzes to test your knowledge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Create Quiz</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-lightPurple p-2 rounded-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Exam Prep Materials</CardTitle>
                    </div>
                    <CardDescription>
                      Generate exam-focused study materials
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Create Exam Prep</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-500 p-2 rounded-lg">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Study Schedule Generator</CardTitle>
                    </div>
                    <CardDescription>
                      Create personalized study schedules
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Generate Schedule</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}


import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Search, Filter, Plus, Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Learn the fundamentals of computer science, including algorithms, data structures, and programming concepts.",
    instructor: "Dr. Jane Smith",
    level: "Beginner",
    students: 1240,
    rating: 4.8,
    progress: 75,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "An in-depth look at various data structures and algorithms, with practical implementations in Python and Java.",
    instructor: "Prof. Michael Johnson",
    level: "Intermediate",
    students: 890,
    rating: 4.7,
    progress: 45,
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites and web applications.",
    instructor: "Sarah Thompson",
    level: "Beginner",
    students: 1560,
    rating: 4.9,
    progress: 30,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    title: "Machine Learning Essentials",
    description: "Explore the foundations of machine learning, including supervised and unsupervised learning algorithms.",
    instructor: "Dr. Robert Chen",
    level: "Advanced",
    students: 720,
    rating: 4.6,
    progress: 0,
    duration: "14 weeks",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Learn to develop native and cross-platform mobile applications for iOS and Android devices.",
    instructor: "Emily Rodriguez",
    level: "Intermediate",
    students: 950,
    rating: 4.5,
    progress: 0,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
];

const recommendedCourses = [
  {
    id: 6,
    title: "Advanced JavaScript Programming",
    description: "Master advanced JavaScript concepts, ES6+ features, and modern development practices.",
    instructor: "Mark Wilson",
    level: "Advanced",
    students: 875,
    rating: 4.8,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 7,
    title: "Database Systems",
    description: "Learn about database design, SQL, NoSQL, and database management systems.",
    instructor: "Dr. Lisa Wang",
    level: "Intermediate",
    students: 720,
    rating: 4.7,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 8,
    title: "Cloud Computing Fundamentals",
    description: "Explore cloud services, deployment models, and architecture with hands-on projects.",
    instructor: "James Miller",
    level: "Intermediate",
    students: 650,
    rating: 4.6,
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
];

export default function Courses() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Courses</h1>
            <p className="text-muted-foreground">Browse and manage your courses</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Import Course
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-8 w-full"
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="my-courses" className="space-y-8">
          <TabsList>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
          </TabsList>

          <TabsContent value="my-courses">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden flex flex-col">
                  <div 
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                      <Star className="ml-4 mr-2 h-4 w-4 text-amber-500" />
                      <span>{course.rating}</span>
                      <Clock className="ml-4 mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-gray text-xs px-2 py-1 rounded-full">
                        {course.level}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Instructor: {course.instructor}
                      </div>
                    </div>
                    
                    {course.progress > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      {course.progress > 0 ? "Continue Learning" : "Start Course"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <Card className="flex flex-col items-center justify-center p-8 h-full border-dashed">
                <Plus className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Generate AI Course</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Use AI to create personalized course content based on your interests
                </p>
                <Button>Create with AI</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommended">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden flex flex-col">
                  <div 
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                      <Star className="ml-4 mr-2 h-4 w-4 text-amber-500" />
                      <span>{course.rating}</span>
                      <Clock className="ml-4 mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="bg-brand-gray text-xs px-2 py-1 rounded-full">
                        {course.level}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Instructor: {course.instructor}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular">
            <div className="flex flex-col items-center justify-center p-8">
              <h3 className="text-lg font-medium mb-2">Popular Courses Coming Soon</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                We're curating the most popular courses for you. Check back later!
              </p>
            </div>
          </TabsContent>

          <TabsContent value="ai-generated">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Create AI-Generated Courses</h2>
                <p className="text-muted-foreground">
                  Let our AI create customized courses tailored to your learning goals and interests.
                </p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Course Generator</CardTitle>
                  <CardDescription>
                    Provide a topic and learning goals to generate a complete course structure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Course Topic</label>
                    <Input placeholder="e.g., Machine Learning, Web Development, Data Science" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Learning Goals</label>
                    <textarea 
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                      placeholder="What do you want to learn from this course?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Difficulty Level</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Course</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

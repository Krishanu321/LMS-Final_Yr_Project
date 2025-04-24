
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, BookOpen, GraduationCap, Medal } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "I'm a computer science student passionate about AI and machine learning.",
  });

  const handleSaveProfile = () => {
    // In a real app, this would save to your backend
    setIsEditing(false);
    // Show a success message or update the user context
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6 flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/avatar.png" alt={user?.name || "User"} />
                    <AvatarFallback className="text-lg">
                      {user?.name?.substring(0, 2).toUpperCase() || "US"}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">{user?.name}</h2>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                  <p className="text-sm text-muted-foreground mt-1">{user?.role} account</p>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Medal className="h-5 w-5 text-amber-500 inline mr-2" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-muted flex gap-3 items-center">
                      <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Course Completer</p>
                        <p className="text-xs text-muted-foreground">Completed 3 courses</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted flex gap-3 items-center">
                      <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Dedicated Learner</p>
                        <p className="text-xs text-muted-foreground">Study streak of 7 days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and public profile
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">
                          Full Name
                        </label>
                        <div className="flex">
                          <div className="relative flex-1">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              value={formData.name}
                              className="pl-9"
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">
                          Email Address
                        </label>
                        <div className="flex">
                          <div className="relative flex-1">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              className="pl-9"
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="bio">
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          value={formData.bio}
                          rows={4}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm">Full Name</h3>
                          <p>{user?.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm">Email Address</h3>
                          <p>{user?.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div>
                          <h3 className="font-medium text-sm">Bio</h3>
                          <p className="text-muted-foreground mt-1">
                            {formData.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                {isEditing && (
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveProfile}>
                      Save Changes
                    </Button>
                  </CardFooter>
                )}
              </Card>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Statistics</CardTitle>
                    <CardDescription>
                      Your learning progress and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold">3</h3>
                        <p className="text-sm text-muted-foreground">Courses in Progress</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold">28.5</h3>
                        <p className="text-sm text-muted-foreground">Study Hours</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <h3 className="text-3xl font-bold">26</h3>
                        <p className="text-sm text-muted-foreground">Completed Chapters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

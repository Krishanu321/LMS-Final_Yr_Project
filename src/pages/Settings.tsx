
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, Shield, Eye, Moon, Sun, Languages, Monitor } from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    courseUpdates: true,
    newMessages: true,
    marketingEmails: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showCourseProgress: true,
    showAchievements: true
  });
  
  const handleSaveSettings = () => {
    // In a real app, this would save settings to your backend
    // For now, just show a message
    alert("Settings saved successfully!");
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>

          <Tabs defaultValue="general" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">
                <Monitor className="mr-2 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Shield className="mr-2 h-4 w-4" />
                Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Display</CardTitle>
                  <CardDescription>
                    Manage how the application looks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {theme === "light" ? (
                          <Sun className="h-5 w-5" />
                        ) : theme === "dark" ? (
                          <Moon className="h-5 w-5" />
                        ) : (
                          <Monitor className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">Theme</p>
                        <p className="text-sm text-muted-foreground">
                          Select your preferred theme
                        </p>
                      </div>
                    </div>
                    <select 
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Languages className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Language</p>
                        <p className="text-sm text-muted-foreground">
                          Select your preferred language
                        </p>
                      </div>
                    </div>
                    <select 
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="en">English</option>
                      <option value="es">Hindi</option>
                      <option value="fr">Bengali</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailNotifications: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Course Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about updates to your courses
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.courseUpdates}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, courseUpdates: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">New Messages</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new messages
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.newMessages}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, newMessages: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">
                        Receive marketing and promotional emails
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.marketingEmails}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, marketingEmails: checked})
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Manage your privacy and data settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Eye className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Profile Visibility</p>
                        <p className="text-sm text-muted-foreground">
                          Control who can see your profile information
                        </p>
                      </div>
                    </div>
                    <select 
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={privacy.profileVisibility}
                      onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Show Course Progress</p>
                      <p className="text-sm text-muted-foreground">
                        Allow others to see your course progress
                      </p>
                    </div>
                    <Switch 
                      checked={privacy.showCourseProgress}
                      onCheckedChange={(checked) => 
                        setPrivacy({...privacy, showCourseProgress: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Show Achievements</p>
                      <p className="text-sm text-muted-foreground">
                        Display your achievements on your profile
                      </p>
                    </div>
                    <Switch 
                      checked={privacy.showAchievements}
                      onCheckedChange={(checked) => 
                        setPrivacy({...privacy, showAchievements: checked})
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

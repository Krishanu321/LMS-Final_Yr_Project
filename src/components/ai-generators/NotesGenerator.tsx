
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookText, Loader2 } from "lucide-react";

interface GeneratedNotes {
  title: string;
  content: {
    heading: string;
    text: string;
  }[];
  summary: string;
}

export function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [sourceContent, setSourceContent] = useState("");
  const [notesFormat, setNotesFormat] = useState("outline");
  const [focusAreas, setFocusAreas] = useState("key-concepts");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState<GeneratedNotes | null>(null);

  const handleGenerateNotes = () => {
    setIsGenerating(true);
    
    // Simulate notes generation (in a real app, this would call your AI backend)
    setTimeout(() => {
      const mockedNotes: GeneratedNotes = {
        title: `${topic} - Study Notes`,
        content: [
          {
            heading: "Introduction to " + topic,
            text: "This section provides an overview of " + topic + " and its importance in the field."
          },
          {
            heading: "Key Concepts",
            text: "Here are the foundational concepts that are essential to understanding " + topic + "."
          },
          {
            heading: "Important Terminology",
            text: "These are the critical terms and definitions you need to know for " + topic + "."
          },
          {
            heading: "Practical Applications",
            text: "Learn how " + topic + " is applied in real-world scenarios and practical situations."
          },
          {
            heading: "Advanced Topics",
            text: "Once you've mastered the basics, these advanced concepts will deepen your understanding."
          }
        ],
        summary: "These notes cover the fundamental aspects of " + topic + ", including key concepts, terminology, and practical applications. Use these notes as a starting point for more in-depth study."
      };
      
      setGeneratedNotes(mockedNotes);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownloadNotes = () => {
    if (!generatedNotes) return;
    
    // In a real app, you would generate a PDF or formatted document
    alert("In a complete implementation, this would download the notes as a PDF.");
  };

  const handleSaveNotes = () => {
    if (!generatedNotes) return;
    
    // In a real app, you would save this to your database
    alert("In a complete implementation, this would save the notes to your database.");
  };

  const resetForm = () => {
    setGeneratedNotes(null);
  };

  return (
    <div className="space-y-6">
      {!generatedNotes ? (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="bg-brand-pink p-2 rounded-lg">
                <BookText className="h-6 w-6 text-white" />
              </div>
              <CardTitle>AI Study Notes Generator</CardTitle>
            </div>
            <CardDescription>
              Create comprehensive study notes from your learning materials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Topic</label>
              <Input 
                placeholder="e.g., Neural Networks, Renaissance Art, Organic Chemistry" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Source Content (Optional)</label>
              <Textarea 
                placeholder="Paste lecture slides, textbook content, or other learning materials. Leave blank to generate from AI knowledge."
                className="min-h-[150px]"
                value={sourceContent}
                onChange={(e) => setSourceContent(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Notes Format</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={notesFormat}
                  onChange={(e) => setNotesFormat(e.target.value)}
                >
                  <option value="outline">Outline Format</option>
                  <option value="cornell">Cornell Method</option>
                  <option value="mind-map">Mind Map Structure</option>
                  <option value="summary">Concise Summary</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Focus Areas</label>
                <select 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={focusAreas}
                  onChange={(e) => setFocusAreas(e.target.value)}
                >
                  <option value="key-concepts">Key Concepts</option>
                  <option value="definitions">Definitions & Terminology</option>
                  <option value="examples">Examples & Applications</option>
                  <option value="comprehensive">Comprehensive Coverage</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={handleGenerateNotes}
              disabled={!topic.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Notes...
                </>
              ) : (
                "Generate Study Notes"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{generatedNotes.title}</CardTitle>
            <CardDescription>AI-generated study notes for {topic}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-brand-pink pl-4 italic text-muted-foreground">
              {generatedNotes.summary}
            </div>
            
            {generatedNotes.content.map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{section.heading}</h3>
                <p className="text-muted-foreground">{section.text}</p>
                {index < generatedNotes.content.length - 1 && (
                  <hr className="my-4" />
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button variant="outline" className="w-full sm:w-auto" onClick={resetForm}>
              Create New Notes
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleDownloadNotes}>
              Download as PDF
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleSaveNotes}>
              Save to My Materials
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

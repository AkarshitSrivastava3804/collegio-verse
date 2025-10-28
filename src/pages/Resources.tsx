import { useState } from "react";
import { Upload, Download, FileText, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      title: "Data Structures Complete Notes",
      description: "Comprehensive notes covering all DSA topics",
      category: "Notes",
      uploader: "John Doe",
      date: "2 days ago",
      downloads: 45,
    },
    {
      title: "DBMS Mini Project",
      description: "Hospital Management System project",
      category: "Projects",
      uploader: "Jane Smith",
      date: "5 days ago",
      downloads: 32,
    },
    {
      title: "C++ Programming Codes",
      description: "Collection of important C++ programs",
      category: "Codes",
      uploader: "Mike Johnson",
      date: "1 week ago",
      downloads: 67,
    },
    {
      title: "Computer Networks eBook",
      description: "Complete reference book for Networks",
      category: "Books",
      uploader: "Sarah Wilson",
      date: "2 weeks ago",
      downloads: 89,
    },
  ];

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      toast.success("Resource uploaded successfully!");
    }, 2000);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Resource Library</h1>
            <p className="text-lg text-muted-foreground">
              Share and access study materials, projects, and more
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Section */}
            <Card className="lg:col-span-1 h-fit animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Resource
                </CardTitle>
                <CardDescription>Share your materials with peers</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Resource title" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notes">Notes</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                        <SelectItem value="codes">Codes</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">File</Label>
                    <Input id="file" type="file" required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90"
                    disabled={isUploading}
                  >
                    {isUploading ? "Uploading..." : "Upload Resource"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Resources List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search & Filter */}
              <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search resources..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="notes">Notes</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                        <SelectItem value="codes">Codes</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Resources Grid */}
              <div className="space-y-4">
                {filteredResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {resource.description}
                              </p>
                            </div>
                            <Badge variant="secondary">{resource.category}</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <span>By {resource.uploader}</span>
                            <span>•</span>
                            <span>{resource.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {resource.downloads}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" className="flex-shrink-0">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <Card className="animate-fade-in">
                  <CardContent className="p-12 text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">No resources found</p>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filters
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;

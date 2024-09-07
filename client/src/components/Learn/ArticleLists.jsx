import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import RoadMap from "../Roadmap/RoadMap";

// Mock data for articles
import articles from "@/components/ChapterContent/articles";

// Roadmap component
function Roadmap({ article, articleid }) {
  return (
    <div className="space-y-4 py-4">
      <h3 className="text-lg font-semibold">
        Learning Roadmap for {article.title}
      </h3>
      {/* <ul className="space-y-2">
        <li className="flex items-center">
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          Understand the basic concept
        </li>
        <li className="flex items-center">
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          Study historical context
        </li>
        <li className="flex items-center">
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          Analyze related case laws
        </li>
        <li className="flex items-center">
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          Explore contemporary applications
        </li>
      </ul> */}
      <RoadMap article={article} articleid={article.id} />
    </div>
  );
}

export default function ArticleList() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  // console.log(articles);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Constitutional Articles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Dialog key={article.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="mt-4">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80vw]">
              <DialogHeader>
                <DialogTitle>{article.title}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[80vh] w-full rounded-md border p-4">
                <p className="text-sm mb-4">{article.content}</p>
                <Roadmap article={article} articleid={article.id} />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

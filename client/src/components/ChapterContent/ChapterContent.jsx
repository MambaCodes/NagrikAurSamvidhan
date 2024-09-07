import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "./articles";
export default function ChapterContent() {
  const [isCompleted, setIsCompleted] = useState(false);

  const { id, ind } = useParams();

  const handleMarkAsCompleted = () => {
    setIsCompleted(true);
    // Here you would typically send a request to your backend to update the user's progress
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {articles[id - 1].chapters[ind].title}
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 p-6">
          <h2 className="text-2xl font-semibold mb-4">Constitutional Text</h2>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <p className="text-lg mb-4">
              {articles[id - 1].chapters[ind].constitutionalText}
            </p>
            {/* Add more articles as needed */}
          </ScrollArea>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Checkbox id="point1" />
                <label htmlFor="point1" className="ml-2">
                  {articles[id - 1].chapters[ind].keyPoints[0]}
                </label>
              </li>
              <li className="flex items-center">
                <Checkbox id="point2" />
                <label htmlFor="point2" className="ml-2">
                  {articles[id - 1].chapters[ind].keyPoints[0]}
                </label>
              </li>
            </ul>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Show Explanation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Explanation:
                  <div className="my-2">
                    {articles[id - 1].chapters[ind].title}
                  </div>
                </DialogTitle>
              </DialogHeader>
              <p className="text-lg">
                {articles[id - 1].chapters[ind].explanation}
              </p>
            </DialogContent>
          </Dialog>

          <Button
            className="w-full"
            onClick={handleMarkAsCompleted}
            disabled={isCompleted}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            {isCompleted ? "Completed" : "Mark as Completed"}
          </Button>
        </div>
      </div>
    </div>
  );
}

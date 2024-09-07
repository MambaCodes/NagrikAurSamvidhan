"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { BarChart, Book, ChevronRight, Clock, Rocket } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Introduction to Constitutional Law",
    lesson: "Lesson 3: Fundamental Rights",
    progress: 30,
    timeLeft: 15,
    icon: Book,
    nextTopic:
      "Explore the fundamental rights guaranteed by the Constitution, including freedom of speech and right to equality.",
  },
  {
    id: 2,
    title: "Understanding the Constitution",
    lesson: "Lesson 5: The Structure of Government",
    progress: 45,
    timeLeft: 20,
    icon: BarChart,
    nextTopic:
      "Dive into the structure of the Indian government, including the roles and functions of the Executive, Legislature, and Judiciary.",
  },
];

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <course.icon className="h-6 w-6" />
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{course.lesson}</p>
          <Progress value={course.progress} className="h-2 mb-3" />
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              {course.timeLeft} mins left
            </span>
            <span>{course.progress}% complete</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button
            className="w-full"
            onClick={() => {
              console.log(`Continuing to ${course.title}...`);
            }}
          >
            Continue Learning
            <ChevronRight className="ml-2" size={16} />
          </Button>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              Next up: {course.nextTopic}
            </p>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function WhereYouLeft() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Where You Left Off
                </h2>
                <p className="text-blue-100">
                  Pick up right where you left off and continue your journey
                  towards mastering constitutional knowledge.
                </p>
              </div>
              <Rocket className="h-16 w-16 text-white opacity-75" />
            </div>
          </div>
          <div className="bg-secondary p-4">
            <p className="text-secondary-foreground text-sm">
              You're on a roll! Maintain your momentum and stay on track to
              achieve your learning goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

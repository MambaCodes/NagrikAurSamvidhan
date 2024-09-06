import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


export default function LearnBanner() {
  return (
    <Card className="w-full bg-gradient-to-r from-blue-900 to-purple-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Empower Yourself with Constitutional Knowledge
            </h2>
            <p className="text-xl">
              Dive into the foundations of our democracy. Start your journey to become a more informed and engaged citizen today.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/learn/chapter-1">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white bg-opacity-20 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute inset-8 bg-white bg-opacity-30 rounded-full animate-pulse animation-delay-400"></div>
              <BookOpen className="absolute inset-0 m-auto h-32 w-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
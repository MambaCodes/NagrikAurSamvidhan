import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, CheckCircle } from "lucide-react"
import RoadMap from '../Roadmap/RoadMap'

// Mock data for articles
const articles = [
  { id: 1, title: "Article 14", description: "Equality before law", content: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India." },
  { id: 2, title: "Article 15", description: "Prohibition of discrimination", content: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them." },
  { id: 3, title: "Article 16", description: "Equality of opportunity", content: "There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State." },
  { id: 4, title: "Article 17", description: "Abolition of Untouchability", content: "Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law." },
  { id: 5, title: "Article 18", description: "Abolition of titles", content: "No title, not being a military or academic distinction, shall be conferred by the State." },
]

// Roadmap component
function Roadmap({ article }) {
  return (
    <div className="space-y-4 py-4">
      <h3 className="text-lg font-semibold">Learning Roadmap for {article.title}</h3>
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
      <RoadMap/>
    </div>
  )
}

export default function ArticleList() {
  const [selectedArticle, setSelectedArticle] = useState(null)

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
                <Roadmap article={article} />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
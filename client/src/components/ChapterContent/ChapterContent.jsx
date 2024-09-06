import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookOpen, CheckCircle } from "lucide-react"

export default function ChapterContent() {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleMarkAsCompleted = () => {
    setIsCompleted(true)
    // Here you would typically send a request to your backend to update the user's progress
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Chapter 1: Fundamental Rights</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 p-6">
          <h2 className="text-2xl font-semibold mb-4">Constitutional Text</h2>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <p className="text-lg mb-4">
              Article 14. The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.
            </p>
            <p className="text-lg mb-4">
              Article 15. The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.
            </p>
            <p className="text-lg mb-4">
              Article 16. There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.
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
                <label htmlFor="point1" className="ml-2">Equality before law</label>
              </li>
              <li className="flex items-center">
                <Checkbox id="point2" />
                <label htmlFor="point2" className="ml-2">Non-discrimination</label>
              </li>
              <li className="flex items-center">
                <Checkbox id="point3" />
                <label htmlFor="point3" className="ml-2">Equal opportunity</label>
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
                <DialogTitle>Explanation: Fundamental Rights</DialogTitle>
              </DialogHeader>
              <p className="text-lg">
                The Fundamental Rights chapter of the Indian Constitution enshrines the basic human rights of all citizens. It guarantees equality before the law, prohibits discrimination on various grounds, and ensures equal opportunity in public employment. These rights are crucial for maintaining social justice and democracy in India.
              </p>
            </DialogContent>
          </Dialog>
          
          <Button 
            className="w-full" 
            onClick={handleMarkAsCompleted}
            disabled={isCompleted}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            {isCompleted ? 'Completed' : 'Mark as Completed'}
          </Button>
        </div>
      </div>
    </div>
  )
}
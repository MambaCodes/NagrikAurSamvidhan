import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Gamepad2,  Dice1, ChevronRight } from "lucide-react"

const games = [
  {
    id: 1,
    title: "Constitutional Quiz",
    description: "Test your knowledge of the constitution with this interactive quiz.",
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Snake and Ladders",
    description: "Climb the ladders of justice and avoid the snakes of injustice in this constitutional twist on a classic game.",
    icon: <Dice1 className="h-6 w-6" />,
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "Rights and Duties Matcher",
    description: "Match fundamental rights with their corresponding duties in this fast-paced game.",
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-500",
  },
]

function GameCard({ game }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className={`bg-gradient-to-r ${game.color} text-white rounded-t-lg h-24`}>
        <div className="flex space-x-2 items-center">
          {game.icon}
          <CardTitle className="text-2xl font-bold ">{game.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm mb-4">{game.description}</CardDescription>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Play Now
              <ChevronRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{game.title}</DialogTitle>
            </DialogHeader>
            <div className="text-center py-10">
              <p>Game content would go here.</p>
              <p className="text-sm text-gray-500 mt-2">This is a placeholder for the actual game implementation.</p>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export default function GamesSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Educational Games</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
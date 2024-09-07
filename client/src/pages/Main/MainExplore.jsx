import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MainExplore() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background   p-4">
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
                <div className="flex-1">
                    <img
                        src="../src/images/banner.jpeg"
                        alt="Game Map"
                        className="w-full h-auto rounded-md"
                        width="400"
                        height="300"
                        style={{ aspectRatio: "400/290", objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col gap-4 md:w-1/3">
                    <Card className="bg-muted  ">
                        <CardHeader>
                            <CardTitle className="text-xl">Score :</CardTitle>
                            <div className="text-3xl font-bold">2903</div>
                        </CardHeader>
                        <CardContent>
                            <p>total coins earned: 243</p>
                            <p>total loss: 243</p>
                            <p>wallet: 0</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full ">CONTINUE JOURNEY</Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-muted  ">
                        <CardHeader>
                            <CardTitle className="text-xl">Daily Challenge</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                LEGISLATIVE DEPARTMENT, Ministry of Law and Justice, GOI: Developed and hosted by National Informatics
                                Centre, Ministry of Electronics & Information Technology, Government of India
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full    ">START NOW</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-6xl mt-8 py-12">
    <h2 className="text-2xl font-bold mb-4">PLAY ONLINE</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <a href="https://example.com/game1">
        <img
            src="../src/images/hangman.jpg"
            alt="Game 1"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
        <a href="https://example.com/game1">
        <img
            src="../src/images/snakes.jpg"
            alt="Game 2"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
        <a href="https://example.com/game1">
        <img
            src="../src/images/match.jpg"
            alt="Game 3"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
        <a href="https://example.com/game1">
        <img
            src="../src/images/maths.avif"
            alt="Game 4"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
        <a href="https://example.com/game1">
        <img
            src="../src/images/minigolf.webp"
            alt="Game 5"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
        <a href="https://example.com/game1">
        <img
            src="../src/images/quiz.webp"
            alt="Game 6"
            className="w-full bg-muted h-60 rounded-md object-cover"
        />
        </a>
    </div>
</div>
    </div>
    )
}
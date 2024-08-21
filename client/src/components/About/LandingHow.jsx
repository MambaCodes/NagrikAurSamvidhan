
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Discover the power of our app and how it can transform your experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Games Available</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Explore our wide range of exciting games and find your new favorite.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Chess</h3>
                    <p className="text-muted-foreground">Test your strategic skills.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Sudoku</h3>
                    <p className="text-muted-foreground">Sharpen your logical thinking.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Trivia</h3>
                    <p className="text-muted-foreground">Test your knowledge and have fun.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Tic Tac Toe</h3>
                    <p className="text-muted-foreground">Classic game of strategy and wit.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Hangman</h3>
                    <p className="text-muted-foreground">Guess the word and save the man.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Wordle</h3>
                    <p className="text-muted-foreground">Guess the daily word.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Tetris</h3>
                    <p className="text-muted-foreground">Fit the falling blocks.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <GamepadIcon className="h-10 w-10 text-primary" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Minesweeper</h3>
                    <p className="text-muted-foreground">Uncover the mines without detonating them.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powered by LLM</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Discover how our app leverages the power of large language models to enhance your experience.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <XIcon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Personalized Recommendations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our LLM-powered recommendation engine suggests the perfect games for you based on your preferences
                    and playing history.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <XIcon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Intelligent Gameplay Assistance</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our LLM-powered game assistants provide real-time hints and strategies to help you improve your
                    skills and enjoy the games even more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
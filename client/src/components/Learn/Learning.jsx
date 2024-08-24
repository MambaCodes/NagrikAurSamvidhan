import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon } from "@heroicons/react/outline";
export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">Learn</span>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Learn</h1>
      </header>
      <main className="flex-1 px-4 lg:px-6 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="Animated character"
              className="max-w-[300px]"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center items-start space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-muted-foreground text-lg italic">
                "The only way to do great work is to love what you do."
              </p>
              <p className="text-sm text-right text-muted-foreground">
                - Steve Jobs
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Where You left off</h2>
            <Card className="max-w-xl">
              <CardContent className="p-6 grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BookOpenIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">
                      Introduction to JavaScript
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Lesson 3: Variables and Data Types
                    </p>
                  </div>
                </div>
                <Button variant="link">Continue Learning</Button>
              </CardContent>
            </Card>
          </div>
        </section>

     <section className="mt-12" >
        <div >
      <div className="prose prose-gray  dark:prose-invert">
      <h2 className="text-2xl font-bold mb-4 text-left">All Parts of Constitution</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold ">PART I: THE UNION AND ITS TERRITORY</h3>
              <p className="text-muted-foreground">Dive into the world of our story and meet the main characters.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART II: CITIZENSHIP</h3>
              <p className="text-muted-foreground">Follow the characters as they embark on an exciting journey.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART III: FUNDAMENTAL RIGHTS</h3>
              <p className="text-muted-foreground">
                The characters encounter unexpected obstacles and must overcome them.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IV - DIRECTIVE PRINCIPLES OF STATE POLICY</h3>
              <p className="text-muted-foreground">
                The characters uncover surprising secrets and learn more about themselves.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IVA: FUNDAMENTAL DUTIES</h3>
              <p className="text-muted-foreground">
                A pivotal moment in the story changes the course of the adventure.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART V: THE UNION</h3>
              <p className="text-muted-foreground">The story reaches its climax and the characters find resolution.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART I: THE UNION AND ITS TERRITORY</h3>
              <p className="text-muted-foreground">Dive into the world of our story and meet the main characters.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART II: CITIZENSHIP</h3>
              <p className="text-muted-foreground">Follow the characters as they embark on an exciting journey.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART III: FUNDAMENTAL RIGHTS</h3>
              <p className="text-muted-foreground">
                The characters encounter unexpected obstacles and must overcome them.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IV - DIRECTIVE PRINCIPLES OF STATE POLICY</h3>
              <p className="text-muted-foreground">
                The characters uncover surprising secrets and learn more about themselves.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IVA: FUNDAMENTAL DUTIES</h3>
              <p className="text-muted-foreground">
                A pivotal moment in the story changes the course of the adventure.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART V: THE UNION</h3>
              <p className="text-muted-foreground">The story reaches its climax and the characters find resolution.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART I: THE UNION AND ITS TERRITORY</h3>
              <p className="text-muted-foreground">Dive into the world of our story and meet the main characters.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART II: CITIZENSHIP</h3>
              <p className="text-muted-foreground">Follow the characters as they embark on an exciting journey.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART III: FUNDAMENTAL RIGHTS</h3>
              <p className="text-muted-foreground">
                The characters encounter unexpected obstacles and must overcome them.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IV - DIRECTIVE PRINCIPLES OF STATE POLICY</h3>
              <p className="text-muted-foreground">
                The characters uncover surprising secrets and learn more about themselves.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IVA: FUNDAMENTAL DUTIES</h3>
              <p className="text-muted-foreground">
                A pivotal moment in the story changes the course of the adventure.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART V: THE UNION</h3>
              <p className="text-muted-foreground">The story reaches its climax and the characters find resolution.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART I: THE UNION AND ITS TERRITORY</h3>
              <p className="text-muted-foreground">Dive into the world of our story and meet the main characters.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART II: CITIZENSHIP</h3>
              <p className="text-muted-foreground">Follow the characters as they embark on an exciting journey.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART III: FUNDAMENTAL RIGHTS</h3>
              <p className="text-muted-foreground">
                The characters encounter unexpected obstacles and must overcome them.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold">PART IV - DIRECTIVE PRINCIPLES OF STATE POLICY</h3>
              <p className="text-muted-foreground">
                The characters uncover surprising secrets and learn more about themselves.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>


    </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {" "}
            {/* Adjusted gap to 6 */}
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Code Cracker"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Code Cracker</h3>
                <p className="text-muted-foreground text-center">
                  Test your programming knowledge.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Logic Puzzle"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Logic Puzzle</h3>
                <p className="text-muted-foreground text-center">
                  Sharpen your problem-solving skills.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Syntax Scramble"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Syntax Scramble</h3>
                <p className="text-muted-foreground text-center">
                  Test your coding syntax knowledge.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Algorithm Arcade"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Algorithm Arcade</h3>
                <p className="text-muted-foreground text-center">
                  Solve algorithmic challenges.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Data Structure Dash"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Data Structure Dash</h3>
                <p className="text-muted-foreground text-center">
                  Explore data structures in a fun way.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Debugging Dungeon"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Debugging Dungeon</h3>
                <p className="text-muted-foreground text-center">
                  Hone your debugging skills.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Refactor Rumble"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Refactor Rumble</h3>
                <p className="text-muted-foreground text-center">
                  Improve your code refactoring skills.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="max-w-md mx-auto">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                <img
                  src="/placeholder.svg"
                  width={100}
                  height={100}
                  alt="Async Adventure"
                  className="max-w-[100px]"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <h3 className="text-lg font-bold">Async Adventure</h3>
                <p className="text-muted-foreground text-center">
                  Explore asynchronous programming.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2"
                  prefetch={false}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>Play Now</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Talk with AI</h2>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Open Chatbot
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:" />
      </footer>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

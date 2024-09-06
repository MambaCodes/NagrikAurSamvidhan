import { Check } from "lucide-react";

export const LandingFeature1 = () => (
  <div className="w-full ">
    <div className="container mx-auto">
      <div className="flex gap-4  flex-col items-start">
        <div>{/* <Badge>Platform</Badge> */}</div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Empowering Every Citizen !
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Understanding the Constitution has never been easier. We’ve made it
            engaging, simple, and accessible for all.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Check className=" size-3 mx-2 mt-2 text-primary" />
                  <p>Simple & User-Friendly</p>
                </div>
                <div className="text-muted-foreground text-sm ml-7">
                  Designed for everyone, from students to senior citizens, the
                  platform is intuitive and easy to navigate. No prior legal
                  knowledge needed!
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Check className=" size-3 mx-2 mt-2 text-primary" />
                  <p>Engaging & Fun</p>
                </div>
                <div className="text-muted-foreground text-sm ml-7">
                  Learning doesn’t have to be boring! With interactive games
                  like Hangman,and Snakes & Ladders, education meets
                  entertainment.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Check className=" size-3 mx-2 mt-2 text-primary" />
                  <p>Fast & Seamless</p>
                </div>
                <div className="text-muted-foreground text-sm ml-7">
                  Enjoy a smooth and lag-free experience. The app is optimized
                  for performance, making sure every interaction is swift and
                  reliable.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Check className=" size-3 mx-2 mt-2 text-primary" />
                  <p>Interactive Quizzes & Tests</p>
                </div>
                <div className="text-muted-foreground text-sm ml-7">
                  Test your knowledge with quizzes after each section. From
                  multiple-choice to situational questions, it keeps learning
                  dynamic and ensures retention.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Check className=" size-3 mx-2 mt-2 text-primary" />
                  <p>Beautiful & Modern Design</p>
                </div>
                <div className="text-muted-foreground text-sm ml-7">
                  With a sleek design, the interface is crafted to engage the
                  eyes while making learning fun. A modern approach to a
                  timeless subject! .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

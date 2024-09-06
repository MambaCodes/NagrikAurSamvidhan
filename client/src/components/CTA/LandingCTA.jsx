import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const LandingCTA = () => (
  <div className="w-full py-20 lg:py-40 ">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col text-center bg-muted rounded-lg p-8 lg:p-16 shadow-lg shadow-gray-700/50 gap-8 items-center">
        {/* Badge (optional) */}
        <div>
          {/* <Badge className="bg-blue-500 text-white">Get started</Badge> */}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Explore the Future of Constitutional Learning with Nagrik Aur
            Samvidhan!
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
            Navigating the complexities of the Constitution shouldn’t be a
            chore. Our platform revolutionizes how you engage with
            constitutional literacy by transforming it into an interactive and
            enjoyable experience. Say goodbye to traditional methods and dive
            into a gamified journey that makes learning about your rights and
            responsibilities both fun and effective. Discover a new way to
            master the Constitution with ease and excitement!
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Button className="flex items-center gap-2 transition-transform transform hover:scale-105 ease-in-out  duration-300">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

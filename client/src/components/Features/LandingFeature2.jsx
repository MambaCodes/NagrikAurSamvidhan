import { User } from "lucide-react";

export const LandingFeature2 = () => (
  <div className="w-full py-20 lg:py-40 ">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <div className="text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
              How It Works!
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Step into the Game! Learning the Constitution is now a game!
              Here’s how you can master it in just a few steps:
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Pick Your Game Style */}
          <div className="bg-muted border-l-4 border-blue-500 rounded-lg p-6 lg:col-span-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-blue-500" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Pick Your Game Style
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether it’s flipping cards, or rolling the dice, choose a
                  game format that excites you. Each one is packed with
                  knowledge!
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Learn as You Play */}
          <div className="bg-muted border-l-4 border-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-green-500" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Learn as You Play
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Play and unlock simplified explanations of the Constitution’s
                  key principles. Learning made fun!
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Challenge Your Friends */}
          <div className="bg-muted border-l-4 border-purple-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-purple-500" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Challenge Your Friends
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Compete with your friends in quizzes and challenges to test
                  your knowledge of the Constitution.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Track Your Progress */}
          <div className="bg-muted border-l-4 border-yellow-500 rounded-lg p-6 lg:col-span-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-yellow-500" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Track Your Progress
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Watch your knowledge grow with progress tracking and earn
                  badges as you master the Constitution!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

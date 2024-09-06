import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon } from "@heroicons/react/outline";
import LearnBanner from "../Hero/LearnBanner";
import { ScaleIcon } from "lucide-react";
import ArticleList from "./ArticleLists";
import GamesSection from "./GamesSection";
import TalkSection from "./TalkSection";
import WhereYouLeft from "./WhereYouLeft";

export default function Learning() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link
          to="/app/learn"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <ScaleIcon className="size-6" />
          <span className="sr-only">Learn Gamified</span>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Play & Learn</h1>
      </header>
      <main className="flex-1 px-4 lg:px-6 py-8">
        <WhereYouLeft/>

        <ArticleList/>
        <TalkSection/>

       <GamesSection/>

        <LearnBanner />

      </main>
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

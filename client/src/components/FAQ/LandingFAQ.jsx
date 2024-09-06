import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function LandingFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Get answers to the most common questions about our product.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What is the purpose of 'Nagrik Aur Samvidhan'?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  The purpose of 'Nagrik Aur Samvidhan' is to make learning
                  about the Constitution engaging, interactive, and accessible.
                  By combining gamification with educational content, the
                  platform aims to simplify complex constitutional concepts,
                  foster a deeper understanding of civic rights and
                  responsibilities, and encourage active and enjoyable learning.
                  It seeks to enhance constitutional literacy and promote
                  informed citizenship through a fun and interactive approach.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How does 'Nagrik Aur Samvidhan' work?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Users select a game format, such as quizzes or card flips, and
                  as they play, they unlock simplified explanations of
                  constitutional concepts. The platform encourages friendly
                  competition by allowing users to challenge others and track
                  their progress on leaderboards.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How do I get started with 'Nagrik Aur Samvidhan'?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  To get started, simply visit our website and create a free
                  account. Once logged in, you can choose from various game
                  formats and start exploring constitutional concepts through
                  interactive learning experiences.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How much does 'Nagrik Aur Samvidhan' cost?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  'Nagrik Aur Samvidhan' is currently available for free. We aim
                  to provide accessible and engaging constitutional education
                  without any cost to our users.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                Can I use 'Nagrik Aur Samvidhan' on mobile devices?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Yes, 'Nagrik Aur Samvidhan' is designed to be accessible on
                  both desktop and mobile devices, allowing you to learn and
                  play from anywhere.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                Is there a way to track my progress and achievements?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Yes, the platform includes features for tracking your progress
                  and achievements. You can view your learning milestones,
                  badges earned, and overall progress on your user dashboard.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What age group is 'Nagrik Aur Samvidhan' suitable for?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  'Nagrik Aur Samvidhan' is designed to be suitable for a wide
                  range of age groups, including students, educators, and the
                  general public. The content is presented in a way that is
                  accessible and engaging for users of different ages and
                  educational backgrounds.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                Can I access 'Nagrik Aur Samvidhan' offline?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Currently, 'Nagrik Aur Samvidhan' requires an internet
                  connection to access and interact with the content. Offline
                  access is not supported at this time.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
export default LandingFAQ;

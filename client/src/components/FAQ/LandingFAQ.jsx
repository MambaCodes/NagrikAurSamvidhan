
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

function LandingFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-xl">
              Get answers to the most common questions about our product.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What is the purpose of this product?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How does this product work?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What are the key features of this product?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How much does this product cost?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What is the purpose of this product?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How does this product work?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                What are the key features of this product?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/50">
                How much does this product cost?
              </AccordionTrigger>
              <AccordionContent className="rounded-md border border-t-0 bg-background px-4 py-3 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
export default LandingFAQ;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How secure is the Bitcoin bridging process?",
      answer: "Our bridge uses industry-leading security practices with multi-signature wallets and smart contract audits. Your Bitcoin is secured through Starknet's proven infrastructure and our partnerships with trusted protocols like Atomiq.",
    },
    {
      question: "What yields can I expect on my Bitcoin?",
      answer: "Current yields range from 4-8% APY depending on market conditions and the specific DeFi strategies deployed. Yields are automatically optimized across multiple protocols including Troves, Endur, and Vesu.",
    },
    {
      question: "Can I withdraw my Bitcoin at any time?",
      answer: "Yes, you maintain full control of your assets. Withdrawals typically process within 15-30 minutes, with the bridge converting your WBTC back to native Bitcoin and returning it to your wallet.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Bitcoin yield farming on Starknet.
          </p>
        </div>
        
        <div className="card-glow p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
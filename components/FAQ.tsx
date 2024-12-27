import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "What is Sapio?",
      answer:
        "Sapio is a platform that helps you find like-minded people, collaborate on meaningful projects, and grow within vibrant communities.",
      value: "item-1",
    },
    {
      question: "Is Sapio free to use?",
      answer:
        "Yes, Sapio is free to use for individuals. However, we may introduce premium features in the future.",
      value: "item-2",
    },
    {
      question: "Who is Sapio for?",
      answer:
        "Sapio is for anyone looking to connect with others—whether you're a tech enthusiast, science nerd, sports fan, or creative artist.",
      value: "item-3",
    },
    {
      question: "How do I join a community?",
      answer:
        "Once you sign up, you can explore and join communities that align with your interests directly from your dashboard.",
      value: "item-4",
    },
    {
      question: "What makes Sapio different from LinkedIn?",
      answer:
        "Unlike LinkedIn, which focuses on professional networking, Sapio is designed for everyone. It connects people based on shared interests and passions, not just career goals.",
      value: "item-5",
    },
  ];
  
  export const FAQ = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
    
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
    
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            rel="noreferrer noopener"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    );
  };
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How can I join DevDisplay?",
    answer: "If you're reading this, you're part of DevDisplay. However, if you wish to be contribute to projects and teams, attend events we host and look out for opportunities and callouts shared to your inbox or through our socials.",
    value: "item-1",
  },
  {
    question: "How can I become a member of a subcommittee?",
    answer: "You can apply to join a subcommittee when we announce vacancies at the beginning of each semester. Stay tuned for recruitment updates.",
    value: "item-2",
  },
  {
    question: "Do I need prior technical knowledge to attend DevDisplay's events?",
    answer: "No prior technical knowledge is required. DevDisplay is a place for learning, and we offer events that cater to all skill levels—from beginner to advanced.",
    value: "item-3",
  },
  {
    question: "Do I need to be a member of DevDisplay to attend events?",
    answer: "No, you do not need to be a member of DevDisplay to attend events. However, if you wish to be a part of our community and contribute to projects and teams, you may join at any time.",
    value: "item-4",
  },
  {
    question: "How can I stay updated on DevDisplay's events?",
    answer: "You can stay updated by following us on our social media platforms, where we regularly post event announcements and updates. Additionally, we send out emails with details on upcoming events to our mailing list. Keep an eye out for event posters, which will also be displayed around the campus to keep everyone informed.",
    value: "item-5",
  },
  {
    question: "What is the Organizing Committee, and how can I join?",
    answer: "The Organizing Committee is responsible for the club's functioning, including planning and executing events. We hold recruitment every semester depending on vacancies. Keep an eye on our announcements for hiring updates if you’re interested in joining the core team.",
    value: "item-6",
  }
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
          href="mailto:team@devdisplay.org"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};

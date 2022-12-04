import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import { accordionData } from "../data";
import Button from "./Button";
const Faq = () => {
  return (
    <section className="mt-40 mx-auto max-w-2xl px-8  ">
      <div className="text-VeryDarkBlue text-center ">
        <h1 className="text-3xl md:text-4xl whitespace-pre font-medium">
          Frequently Asked <br className="md:hidden" /> Questions
        </h1>
        <p className="text-GrayishBlue mt-8">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.{" "}
        </p>
      </div>
      <FaqAccordion />
      <div className="flex justify-center items-center mt-12">
        <Button>More Info</Button>
      </div>
    </section>
  );
};

export default Faq;

const FaqAccordion = () => {
  return (
    <div className="mt-16">
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {accordionData.map((q) => (
          <Accordion.Item
            key={q.question}
            className="AccordionItem first:border-t"
            value={q.value}
          >
            <Accordion.Trigger className="AccordionTrigger  group  ">
              <span className="group-hover:text-SoftRed py-2 transition ">
                {q.question}
              </span>
              <FaChevronDown className="AccordionChevron" />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent">
              <p className="py-6">{q.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

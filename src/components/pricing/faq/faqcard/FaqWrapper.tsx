import { useState } from "react";
import AccordionItem from "./FaqCard";
import FaqCardHeader from "./FaqCardHeader";
// AccordionItem component

// Main Accordion component
export default function Accordion() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const accordionData = [
    {
      title: "How much time does it take ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What is your class naming convention ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How do we communicate ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "I have a bigger project. Can you handle it ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What is your class naming convention ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-screen gap-y-8 lg:flex-row lg:justify-between lg:items-start ">
      <div className="w-full text-center lg:w-3/6  lg:text-left">
        <FaqCardHeader />
      </div>
      <div className="w-full  lg:w-4/6 lg:p-0">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            indexCount={index}
            title={item.title}
            content={item.content}
            isActive={index === activeItem}
            onClick={() => toggleAccordion(index)}
            className="border border-green-500"
          />
        ))}
      </div>
    </div>
  );
}

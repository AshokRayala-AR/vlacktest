import  { useState } from "react";
import AccordionItem from "./FaqCard";
import FaqCardHeader from "./FaqCardHeader";
// AccordionItem component

// Main Accordion component
export default function Accordion() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index:any) => {
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
    <div className="flex justify-center items-start pb-16">
      <div className="w-2/6  text-left">
        <FaqCardHeader />
      </div>
      <div className="w-3/6 ">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            indexCount={index}
            title={item.title}
            content={item.content}
            isActive={index === activeItem}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}

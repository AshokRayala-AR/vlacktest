import { useState } from "react";
import AccordionItem from "./FaqCard";
import FaqCardHeader from "./FaqCardHeader";
import { useTranslation } from "react-i18next";

export default function Accordion() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const accordionData = [
    {
      title: t("faq-q-1"),
      content: t("faq-a-1"),
    },
    {
      title: t("faq-q-2"),
      content:
        t('faq-a-2'),
    },
    {
      title: t("faq-q-3"),
      content:
      t('faq-a-3'),
    },
    {
      title: t("faq-q-4"),
      content:
      t('faq-a-4'),
    },
    {
      title: t("faq-q-5"),
      content:
      t('faq-a-5'),
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

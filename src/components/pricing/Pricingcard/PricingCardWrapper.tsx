import  { useState } from "react";
import PricingCard from "./PricingCard";
import PricingData from "./PricingData";
import { useTranslation } from "react-i18next";

export default function PricingCardWrapper() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:p-24 p-8">
      <div className="text-sm text-center w-3/6 m-auto flex flex-col gap-3 mb-10 ">
        <p className="text-2xl font-bold ">{ t("pricing-ttl")}</p>
        <p className="line-clamp-2">
         {t("pricing-desc")}
        </p>
      </div>
      <div className=" text-white gap-x-4 gap-y-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   ">
        {PricingData.map((item, index) => (
          <PricingCard
            key={index}
            item={item}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

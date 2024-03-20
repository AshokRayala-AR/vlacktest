import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PricingData from "./PricingData";

export default function PricingCardWrapper() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="flex flex-col p-24 ">
      <div className="text-sm text-center w-3/6 m-auto flex flex-col gap-3 mb-10 ">
        <p className="text-2xl font-bold ">Our Pricing Plans</p>
        <p className="line-clamp-2">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <div className="flex justify-around gap-3  text-white ">
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

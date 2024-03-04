import PricingCard from "./PricingCard";
import PricingCardData from "./PricingCardData";
export default function Pricing() {
  return (
    <div className="flex gap-3 p-20 text-white">
      {PricingCardData.map((item, i) => {
        return <PricingCard item={item} key={i} />;
      })}
    </div>
  );
}

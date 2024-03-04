import PricingCardList from "./PricingCardList";
import Button from "./Button";
export default function PricingCard({ item }) {
  return (
    <div className="flex flex-col gap-10 border border-slate-400 py-10 pl-8 pr-14 max-w-460px max-w-460px bg-customHomeBack rounded-[12px]">
      <div className="flex flex-col gap-3 ">
        <p className="text-3xl font-bold flex items-center gap-2">
          {item.amount}
          <span className="text-sm ">{item.amountSpan}</span>
        </p>
        <p className="text-xl">{item.title}</p>
        <p className="text-sm">{item.description}</p>
      </div>
      <div className="flex flex-col gap-2 ">
        {item.list.map((listItem: any, index: number) => {
          return <PricingCardList listItem={listItem} key={index} />;
        })}
      </div>
      <div>
        <Button item={item} />
      </div>
    </div>
  );
}

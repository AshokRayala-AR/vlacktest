
import PricingList from "./PricingList";
export default function PricingCard({ item, isSelected, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`flex flex-col gap-10 py-10 pl-8 pr-14 rounded-[12px] shadow-md cursor-pointer  ${
        isSelected ? "bg-[#1C1E53] " : "bg-[#F4F6FC] text-black"
      }`}
      style={{
        minWidth: "260px",
        maxWidth: "350px",
        transition: "transform 0.2s,",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold flex items-center gap-2">
          {item.amount}
          <span
            className={`text-sm font-semibold ${
              isSelected ? "text-[#FCD980]" : "text-[#2405F2]"
            }`}
          >
            {item.amountSpan}
          </span>
        </p>
        <p className="text-xl">{item.title}</p>
        <p className="text-sm">{item.description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {item.list.map((listItem, index) => (
          <div key={index} className="list-none text-sm">
            <PricingList listItem={listItem} />
          </div>
        ))}
      </ul>
      <button
        className={`px-5 py-3 ${
          isSelected ? "bg-[#FCD980]" : "bg-black text-white"
        }  text-black rounded-full`}
      >
        {item.btnDescription}
      </button>
    </div>
  );
}

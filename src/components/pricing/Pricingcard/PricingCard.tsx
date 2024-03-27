import { useNavigate } from "react-router-dom";
import PricingList from "./PricingList";
import { useTranslation } from "react-i18next";
export default function PricingCard({ item, isSelected, onClick }: any) {
  const handleClick = () => {
    onClick();
  };
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className={`p-5 rounded-[12px] shadow-md cursor-pointer ${
        isSelected ? "bg-[#1C1E53] " : "bg-[#F4F6FC] text-black"
      } flex flex-col gap-10 md:w-full  md:p-3 md:pt-5 lg:py-10 lg:pl-8 lg:pr-14 `}
      style={{
        minWidth: "260px",

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
      <div className="  sm:flex sm:flex-col lg:flex lg:flex-col gap-4">
        <div className="flex flex-col gap-4 ">
          <p className="text-3xl font-bold flex items-center gap-2">
            {t(`${item.amount}`)}
            <span
              className={`text-sm font-semibold ${
                isSelected ? "text-[#FCD980]" : "text-[#2405F2]"
              }`}
            >
              {t(`${item.amountSpan}`)}
            </span>
          </p>
          <p className="text-xl">{t(`${item.title}`)}</p>
          <p className="text-sm ">{t(`${item.description}`)}</p>
        </div>
        <ul className="flex flex-col gap-2 ">
          {item.list.map((listItem, index) => (
            <div key={index} className="list-none text-sm">
              <PricingList listItem={listItem} />
            </div>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={`px-8 py-3 max ${
            isSelected ? "bg-[#FCD980]" : "bg-black text-white"
          }  text-black rounded-full`}
          onClick={() => navigate("/contact")}
        >
          {t(`${item.btnDescription}`)}
        </button>
      </div>
    </div>
  );
}

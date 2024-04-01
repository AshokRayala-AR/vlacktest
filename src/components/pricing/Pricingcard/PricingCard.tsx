import { useNavigate } from "react-router-dom";
import PricingList from "./PricingList";
import { useTranslation } from "react-i18next";
import { PricingCardProp } from "../../../utils/types/Types";

export default function PricingCard({
  item,
  isSelected,
  onClick,
}: PricingCardProp) {
  const handleClick = () => {
    onClick();
  };
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col gap-10   p-5 rounded-[12px] duration-[1.2s] shadow-md cursor-pointer hover:bg-[#1C1E53] hover:text-white transition-2 hover:scale-[1.14] ${
        isSelected ? "bg-[#1C1E53]" : "bg-[#F4F6FC] text-black"
      } min-w-[280px] max-w-[280px] md:max-w-[320px] md:w-full md:p-3 md:pt-5 lg:py-10 lg:pl-8 lg:pr-14 `}
      onClick={handleClick}
    >
      <div>
        <div className="  sm:flex sm:flex-col lg:flex lg:flex-col gap-4 z-1 ">
          <div className="flex flex-col gap-4">
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
            {item.list.map((listItem: string, index: number) => (
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
    </div>
  );
}

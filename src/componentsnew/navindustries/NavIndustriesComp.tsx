import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavIndustriesData } from "./NavIndustriesData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavIndustriesComp() {
  const { industryName } = useParams<{ industryName: string }>();
  const [selectedIndustry, setSelectedIndustry] = useState(
    NavIndustriesData[0]
  );
  const { t } = useTranslation();

  useEffect(() => {
    const index = getIndustryIndex(industryName);
    setSelectedIndustry(NavIndustriesData[index]);
  }, [industryName]);

  function getIndustryIndex(industryName: string | undefined): number {
    switch (industryName) {
      case "finance-title":
        return 0;
      case "health-care-title":
        return 1;
      case "supply-title":
        return 2;
      case "mnfctr-title":
        return 3;
      case "Retail-title":
        return 4;
      case "tele-commun-title":
        return 5;
      case "auto-mob-title":
        return 6;
      case "edu-title":
        return 7;
      case "insurance-title":
        return 8;
      case "marketing-title":
        return 9;
      default:
        return 0;
    }
  }

  return (
    <div className="flex justify-center items-center p-12 main_head bg-black">
      <div className="w-full mt-20">
        {selectedIndustry.map((item, idx) => (
          <div
            key={idx}
            className="min-w-full flex flex-col lg:flex-row lg:items-start gap-14 lg:px-20 md:px-8"
          >
            <div className="flex justify-center items-center w-full lg:w-3/6">
              <img src={item.img} alt="" className="md:h-80 max-h-46" />
            </div>

            <div className="flex flex-col justify-center gap-6 lg:w-3/6 ">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium tracking-wide bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent">
                  {t(`${item.title}`)}
                </p>
                <h1 className="text-2xl font-medium tracking-wider text-slate-500">
                  {t(`${item.headLine}`)}
                </h1>
              </div>

              {item.content.map((contentItem, contentIdx) => (
                <div key={contentIdx} className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 text-sm tracking-wide text-slate-300">
                    <li className="">
                      <span className="px-2 font-bold text-[#f87005] text-xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list1}`)}
                    </li>
                    <li className="">
                      <span className="px-2 font-bold text-[#f87005] text-xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list2}`)}
                    </li>
                    <li className="">
                      <span className="px-2 font-bold text-[#f87005] text-xl rounded-full">
                        &#10003;
                      </span>{" "}
                      {t(`${contentItem.list3}`)}
                    </li>
                  </ul>
                  <p className="text-[#E6C24A] font-bold ">View More</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavIndustriesComp;

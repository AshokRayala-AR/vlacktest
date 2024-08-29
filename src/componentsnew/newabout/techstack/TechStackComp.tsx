import { useTranslation } from "react-i18next";
import { TechStackNavData } from "./TechStackData";
import { TechstackData } from "./TechStackData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
function TechStackComp() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(TechstackData[0]);

  useEffect(() => {
    setSelectedIndex(TechstackData[index]);
  }, [index]);

  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  return (
    <motion.div
      className="h-full max-w-screen bg-black flex flex-col gap-12 p-8 md:p-24 overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="bg-gradient-to-r from-[#f87005] to-[#ecbe28] bg-clip-text text-transparent tracking-wider text-4xl font-semibold">
          {t("ts-headline")}
        </p>

        <p className="text-slate-400 text-lg md:text-2xl text-center font-normal">
          {t("ts-subtitle")}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex text-md max-w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
          {TechStackNavData.map((item, idx) => (
            <div
              key={item.id}
              className="flex justify-center items-center h-12"
            >
              <p
                onClick={() => handleClick(idx)}
                className={`cursor-pointer px-3 text-center relative ${
                  index === idx
                    ? "font-bold border-b-2 border-[#f87005] text-[#f87005] after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-14px] after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-t-8 after:border-transparent after:border-t-[#E6C24A]"
                    : "border-b-2 text-slate-500"
                }`}
              >
                {t(`${item.title}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:h-[50vh] justify-center items-start gap-4 w-full">
          {selectedIndex.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-between items-center gap-2 w-2/5 md:w-1/5 border-2 border-[#f87005] rounded-lg md:h-2/6 "
              whileHover={{
                backgroundColor: "#321601",
                transition: { duration: 0.2 },
              }}
            >
              <div className="h-4/6 flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="h-10 w-10 md:w-12 md:h-12 lg:w-16 lg:h-full object-center object-contain"
                />
              </div>

              <div className="h-2/6 ">
                <p className="text-slate-200 sm:text-sm lg:text-xl text-center font-normal">
                  {t(`${item.title}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TechStackComp;

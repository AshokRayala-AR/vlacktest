import { useEffect, useState } from "react";
import { IndustriesData } from "./IndustriesData";
import { IndustriesIdData } from "./IndustriesData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants, imageVariants } from "../../../utils/scrolls/Scroll";

function IndustriesComp() {
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(IndustriesData[0]);
  const { t } = useTranslation();
  const [uniqueKey, setUniqueKey] = useState(Date.now());

  useEffect(() => {
    setSelectedIndex(IndustriesData[index]);
    setUniqueKey(Date.now());
  }, [index]);

  useEffect(() => {
    setUniqueKey(Date.now());
  }, []);

  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  const backgroundColor = IndustriesIdData[index].color;

  return (
    <motion.div
      className="bg-[#FFf] flex flex-col justify-center items-center gap-12 p-8 min-h-screen max-w-screen overflow-hidden"
      style={{ backgroundColor }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-4xl bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent tracking-wide font-medium self-start">
          {t("indu-title")}
        </h1>

        <div className="flex xl:justify-center text-md max-w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
          {IndustriesIdData.map((item, idx) => (
            <div key={item.id} className="flex items-start h-12 ">
              <p
                onClick={() => handleClick(idx)}
                className={`cursor-pointer px-3 py-1 text-center relative ${
                  index === idx
                    ? "font-bold border-b-2 border-[#f87005] text-[#f87005] after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-14px] after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-t-8 after:border-transparent after:border-t-[#E6C24A]"
                    : "border-b-2  text-slate-500"
                }`}
              >
                {t(`${item.name}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div className="w-full">
        {selectedIndex.map((item, idx) => (
          <div
            key={idx}
            className="min-w-full flex flex-col lg:flex-row lg:items-start gap-14 lg:px-20 md:px-8"
          >
            <div className="flex justify-center items-center w-full lg:w-3/6">
              <motion.img
                src={item.img}
                alt=""
                className="md:h-80 max-h-46"
                variants={imageVariants}
                initial="offscreen"
                animate="onscreen"
                key={`${item.img}-${uniqueKey}`} // Update key to force re-render
              />
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
      </motion.div>
    </motion.div>
  );
}

export default IndustriesComp;

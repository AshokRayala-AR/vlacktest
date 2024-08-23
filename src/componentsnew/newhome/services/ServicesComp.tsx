import { useEffect, useState } from "react";
import { ServicesData } from "./ServicesData";
import { ServicesMenuData } from "./ServicesData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll.tsx";
function ServicesComp() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState(ServicesData[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedIndex(ServicesData[index]);
  }, [index]);

  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  function handleReadMoreClick() {}

  return (
    <motion.div
      className="bg-[#080808] lg:flex-row flex flex-col w-full lg:h-[120vh] md:p-14 p-2 lg:py-28 md:p-16 p-6"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:w-2/6 gap-8 ">
        <h1 className=" text-4xl  bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent tracking-wide font-medium">
          Services
        </h1>
        <motion.div
          className="flex flex-col w-full text-md"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ServicesMenuData.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex justify-start "
              variants={cardVariants}
            >
              <p
                onClick={() => handleClick(idx)}
                className={`cursor-pointer  md:p-3 p-2 rounded-md ${
                  index === idx
                    ? "border-l-2 border-[#f87005] text-[#f87005] md:font-semibold md:text-xl text-md shadow-sm shadow-[#ffc8a4]"
                    : "border-l-2 border-slate-500 text-slate-500 md:text-lg text-md"
                }`}
              >
                {t(`${item.title}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex flex-row md:grid md:grid-cols-2 md:gap-12 gap-6 lg:w-5/6  p-2 py-10 overflow-x-auto sm:overflow-y-auto  hide-scrollbar"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        {selectedIndex.map((item, idx) => (
          <div
            key={idx}
            className={`min-w-[280px] text-white backdrop-blur-lg  bg-white bg-opacity-20 hover:bg-opacity-30 flex flex-col gap-4 p-4 md:rounded-2xl rounded-lg hover:shadow-lg hover:shadow-[#ffc8a4] relative `}
            onMouseEnter={() => {
              setHoveredIndex(idx);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
          >
            <motion.div
              className="flex justify-start items-center absolute"
              animate={{
                top: hoveredIndex === idx ? -32 : 0,
                scale: hoveredIndex === idx ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
            >
              <img
                src={item.img}
                alt="svg"
                className="md:max-w-16 md:max-h-16  max-w-12"
              />
            </motion.div>

            <div className="flex flex-col md:mt-14 mt-10 gap-4 tracking-wide md:pt-8 pt-2">
              <div className="flex justify-between">
                <h1 className="md:text-lg text-lg font-medium text-[#f87005]">
                  {t(`${item.title}`)}
                </h1>
              </div>
              <p className="text-sm leading-6 text-slate-300 ">
                {t(`${item.content}`)}
              </p>
              <p>
                <a
                  href="#"
                  onClick={handleReadMoreClick}
                  className="text-red-600 tracking-normal font-bold text-sm"
                >
                  {t("readmore")}
                </a>
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ServicesComp;

import { data } from "./HowWeWorkData.tsx";
import { useTranslation } from "react-i18next";
import Icon from "./Icon.tsx";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll.tsx";
import { Link } from "react-router-dom";

export default function HowWeWorkPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className=" flex justify-center items-center bg-[#080808]  lg:pt-20 md:px-14 md:pt-10 "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" flex flex-col justify-center items-center xl:gap-8">
        <div className="flex flex-col items-center w-full text-center ">
          <h1 className="text-4xl bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent tracking-wide font-medium">
            how we work
          </h1>
          <p className="p-2 text-slate-300 text-sm leading-6 md:w-4/6 w-5/6 ">
            {t("h-w-w-desc")}
          </p>
          <Link to="/contact" className="text-[#f87005] text-customblue p-2 font-semibold">
            {t("h-w-w-link")} &rarr;
          </Link>
        </div>
        <div className="p-5 gap-4 grid grid-cols-1  sm:grid-cols-2 ">
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="md:max-w-[40vw] min-w-[280px]  text-white tracking-wide backdrop-blur-lg bg-opacity-20 hover:bg-opacity-30 flex flex-col gap-4 p-4 rounded-2xl shadow-lg hover:shadow-[#ffc8a4]"
              variants={cardVariants}
            >
              <div className={`z-10`}>
                <Icon item={item} />
              </div>
              <h2 className="text-lg font-medium text-[#f87005]">
                {t(`${item.title}`)}
              </h2>
              <p className="text-balance text-sm leading-6 p-2">
                {t(`${item.content}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

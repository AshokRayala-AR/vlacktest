import { data } from "./HowWeWorkData.tsx";
import { useTranslation } from "react-i18next";
import Icon from "./Icon.tsx";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll.tsx";

export default function HowWeWorkPage() {
  const { t } = useTranslation();
  return (
    < motion.div className=" flex justify-center items-center bg-[#F4F6FC] p-5 lg:pt-20 md:px-14 md:pt-10" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}>
      <div className=" md:flex justify-center items-start md:gap-8 ">
        <div className="flex flex-col items-center w-full text-center md:flex md:items-start md:w-2/6 md:text-left ">
          <h1 className="font-bold text-3xl p-2">how we work</h1>
          <p className="p-2 w-4/6  md:w-full">{t("h-w-w-desc")}</p>
          <a href="#" className=" text-customblue p-2 ">
            {t("h-w-w-link")}
          </a>
        </div>
        <div className="p-5 gap-y-4 grid grid-cols-1 md:w-3/6 md:px-0 sm:grid-cols-2 " 
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="text-center md:text-left shadow-sm rounded-md p-5 z-0"
              variants={cardVariants}
            >
              <div className={`z-10`}>
                <Icon item={item} />
              </div>
              <h2 className="text-2xl font-medium p-2">{t(`${item.title}`)}</h2>
              <p className="text-balance p-2">{t(`${item.content}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

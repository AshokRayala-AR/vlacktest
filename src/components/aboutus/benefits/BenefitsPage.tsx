import { Data } from "./BenefitsData";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function BenefitsPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col gap-8 justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="w-96 text-center align-center mt-8"
        variants={cardVariants}
      >
        <h1 className="font-bold text-3xl">{t("abt-us-benfits-ttl")}</h1>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className=" grid grid-cols-1 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 w-5/6"
      >
        {Data.map((item, index) => (
          <motion.div
            key={index}
            className=" text-left p-6 bg-[#eef4fa] shadow-md mb-4"
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4 md:justify-start ">
              <item.svg />
            </div>
            <h1 className="flex justify-center text-xl font-semibold mb-4 md:justify-start">
              {t(`${item.title}`)}
            </h1>
            <p className="text-justify mb-4">{t(`${item.content}`)}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BenefitsPage;

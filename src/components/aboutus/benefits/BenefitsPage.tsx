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

      <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4  w-5/6 mb-4 ">
        {Data.map((item) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              className=" md:text-left p-6 bg-[#f4f6fc] "
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4 md:justify-start">
                <item.svg />{" "}
              </div>
              <h1 className="flex justify-center text-xl font-semibold mb-4 md:justify-start">
                {t(`${item.title}`)}
              </h1>
              <p className="text-justify mb-4">{t(`${item.content}`)}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default BenefitsPage;

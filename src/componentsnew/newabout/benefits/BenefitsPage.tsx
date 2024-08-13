import { Data } from "./BenefitsData";
import orangelines from "../../../assets/images/orangelines2.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function BenefitsPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col gap-12 justify-center items-center bg-black p-6 "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      style={{
        backgroundImage: `url(${orangelines})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="w-full text-center align-center mt-8 "
        variants={cardVariants}
      >
        <h1 className="bg-gradient-to-r from-[#f87005] to-[#ecbe28] bg-clip-text text-transparent tracking-wider text-4xl font-semibold ">
          {t("abt-us-benfits-ttl")}
        </h1>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className=" grid grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-6 "
      >
        {Data.map((item, index) => (
          <motion.div
            key={index}
            className=" text-left p-6 bg-slate-300 bg-opacity-10 backdrop-blur-sm shadow-lg rounded-lg transform hover:shadow-[0px_0.5px_15px_1px_#f87005] mb-4"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex justify-center mb-4 md:justify-start ">
              <item.svg />
            </div>
            <h1 className="flex justify-center text-[#f87005] text-lg font-semibold mb-4 md:justify-start">
              {t(`${item.title}`)}
            </h1>
            <p className="text-justify text-slate-300 mb-4">
              {t(`${item.content}`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BenefitsPage;
import { useTranslation } from "react-i18next";
import ourdesign1 from "../../../assets/images/ourdesign1.png";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function OurDesignPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col p-5 gap-6 sm:p-8 lg:flex-row lg:justify-center lg:p-14  "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col justify-center gap-6 lg:w-3/6 lg:text-left lg:flex lg:gap-6  "
        variants={cardVariants}
      >
        <h5 className="font-bold lg:font-semibold ">{t("abt-us-ttl-span")}</h5>
        <h1 className="text-2xl lg:text-4xl font-semibold">
          {t("abt-us-ttl")}
        </h1>
      </motion.div>
      <motion.div className="lg:w-3/6" variants={cardVariants}>
        <img
          src={ourdesign1}
          className=" md:w-full md:h-[400px] object-center object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default OurDesignPage;

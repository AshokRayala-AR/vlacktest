import FeatureCard from "./FeatureCard.tsx";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll.tsx";

function FeaturePage() {
  const { t } = useTranslation();

  return (
    <motion.div
      className={
        "bg-[#F4F6FC] flex flex-col gap-8 justify-center items-center py-10 pt-6 md:pt-0 "
      }
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="w-96 text-center align-center"
        variants={cardVariants}
      >
        <small className="font-medium">{t("h-w-w-features-ttl")}</small>
        <p className="font-bold text-3xl">{t("h-w-w-fetures-hl")}</p>
      </motion.div>

      <FeatureCard />
    </motion.div>
  );
}

export default FeaturePage;

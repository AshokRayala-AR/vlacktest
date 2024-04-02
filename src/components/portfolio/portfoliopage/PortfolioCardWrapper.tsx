import { PortfolioData } from "./PortfolioData";
import PortfolioCard from "./PortfolioCard";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'
import { cardVariants } from '../../../utils/scrolls/Scroll'
export default function PorfolioCardWrapper() {
  const {t} = useTranslation()
  return (
    <motion.div className="flex flex-col w-full gap-4"
    initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}>
      <motion.ul className="flex flex-wrap gap-4  sm:flex-row m-auto sm:gap-8 sm:pt-14 sm:pb-6 " variants={cardVariants}>
        <li>{t("prtfl-lst-itm1")}</li>
        <li>{t("prtfl-lst-itm2")}</li>
        <li>{t("prtfl-lst-itm3")}</li>
        <li>{t("prtfl-lst-itm4")}</li>
      </motion.ul>

      <motion.div className="grid grid-cols-1 gap-y-8 md:gap-x-5 md:gap-y-14 md:grid-cols-2" variants={cardVariants}>
        {PortfolioData.map((item, index) => {
          return <PortfolioCard item={item} key={index} />;
        })}
      </motion.div>
    </motion.div>
  );
}

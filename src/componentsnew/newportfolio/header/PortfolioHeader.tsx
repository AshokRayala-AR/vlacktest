import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { Link } from "react-router-dom";

export default function PortfolioHeader() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-4 py-4 px-2 text-center w-full lg:px-20 lg:py-12 bg-[#141414] rounded-md backdrop-blur-lg bg-opacity-120 ">
        <p className="text-base text-slate-300">{t("prtfl-ttl-span")}</p>
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent">
          {t("prtfl-ttl")}
        </h1>
        <p className="text-base text-slate-300">{t("prtfl-desc")}</p>
      </div>
      <motion.ul
        className="flex flex-wrap gap-4 mb-4 sm:flex-row m-auto sm:gap-8 pt-14 pb-6 text-[#e6c24a]"
        variants={cardVariants}
      >
        <Link to='all'>{t("prtfl-lst-itm1")}</Link>
        <Link to='ui'>{t("prtfl-lst-itm2")}</Link>
        <Link to='figma'>{t("prtfl-lst-itm4")}</Link>

      </motion.ul>
    </>
  );
}

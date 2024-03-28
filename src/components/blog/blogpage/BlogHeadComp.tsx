import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

export default function BlogHeader() {
  const { t } = useTranslation();
  return (
    <motion.div className="flex flex-col text-center gap-6 w-full" initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}
    
    >
      <motion.div className="flex flex-col  w-full" variants={cardVariants}>
      <h1 className="text-3xl font-semibold">{t("blog-head-ttl")}</h1>
      <p className="text-sm">{t("blog-head-andrew")}</p>
      <img
        src="src/assets/images/bloghead.jpg "
        className="h-[300px] object-cover"
        alt=""
      />
      <p>{t("blog-head-desc")}</p>
      <p className="text-sm text-[#2405F2]">{t("blog-rdmr")}</p>
      </motion.div>
    </motion.div>
  );
}

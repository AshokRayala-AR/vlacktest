import { BlogCardData } from "./BlogData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { Link } from "react-router-dom";

export default function BlogCard() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="py-8 w-full "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl font-semibold text-center pb-6"
        variants={cardVariants}
      >
        {t("blog-ttl")}
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BlogCardData.map((item, index) => {
          return (
            <motion.div
              className="flex flex-col gap-3 mb-4"
              variants={cardVariants}
              key={index}
            >
              <img src={item.img} alt="" />
              <p className="text-sm">{t(`${item.date}`)}</p>
              <h1 className="text-lg font-semibold">{t(`${item.headline}`)}</h1>
              <p className="text-sm line-clamp-4">{t(`${item.description}`)}</p>
              <Link className="font-medium" to="">
                {t(`${item.readmore}`)} &rarr;
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

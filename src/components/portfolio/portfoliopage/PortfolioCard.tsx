import { useTranslation } from "react-i18next";
import { PortfolioType } from "../../../utils/types/Types";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { motion } from "framer-motion";

export default function PortfolioCard({
  item,
  key,
}: {
  item: PortfolioType;
  key: number;
}) {
  const { t } = useTranslation();
  function handleGoToWebsite(link:string) {
    window.open(`https://${link}`, "_blank");
  }
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      key={key}
      className="flex flex-col gap-2 items-center"
    >
      <div className=" ">
        <motion.img
          variants={cardVariants}
          className="w-screen border-x-[39px] border-y-[30px] md:w-[545px] h-[317px]  object-contain object-center"
          style={{
            borderImage: `${item.border}`,
          }}
          src={item.img}
          alt="some"
        />
      </div>
      <div className="flex flex-col items-start md:gap-y-5 gap-y-2">
        <h1 className="text-xl font-semibold">{t(`${item.title}`)}</h1>
        <p className="text-sm">{t(`${item.description}`)}</p>

        <div className="text-sm font-medium" onClick={() => { handleGoToWebsite(item.link) }}>
          {t(`${item.view}`)} &rarr;
        </div>
      </div>
    </motion.div>
  );
}

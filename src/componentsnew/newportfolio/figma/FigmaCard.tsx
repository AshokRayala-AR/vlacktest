import { useTranslation } from "react-i18next";
import { PortfolioType } from "../../../utils/types/Types";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { motion } from "framer-motion";

export default function UxCard({ item }: { item: PortfolioType }) {
  const { t } = useTranslation();

  function handleGoToWebsite(link: string) {
    window.open(`https://${link}`, "_blank");
  }
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-2 items-center"
    >
      <div className="md:w-[300px] min-w-[280px] max-w-[280px] md:min-h-[200px] lg:min-w-[400px] lg:min-h-[320px] xl:min-w-[500px]  max-w-[90vw] md:max-w-[60vw]">
        <motion.img
          variants={cardVariants}
          className="w-screen border-x-[39px] border-y-[30px] md:min-h-[200px]  object-cover object-center lg:min-w-[400px] lg:min-h-[320px] xl:min-w-[500px]"
          style={{
            borderImage: `${item.border}`,
          }}
          src={item.img}
          alt="some"
        />
      </div>
      <div className="flex flex-col items-start w-[80%] md:gap-y-5 gap-y-2">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent">{t(`${item.title}`)}</h1>
        <p className="text-sm text-slate-300">{t(`${item.description}`)}</p>

        <div
          className="text-sm font-medium text-red-500"
          onClick={() => {
            handleGoToWebsite(item.link);
          }}
        >
          {t(`${item.view}`)} &rarr;
        </div>
      </div>
    </motion.div>
  );
}

import { useTranslation } from "react-i18next";
import { PortfolioType } from "../../../utils/types/Types";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { motion } from "framer-motion";

export default function AllCard({ item }: { item: PortfolioType }) {
  const { t } = useTranslation();

  function handleGoToWebsite(link: string) {
    window.open(`https://${link}`, "_blank");
  }
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-4 items-center"
    >
      <div className="">
        <motion.img
          variants={cardVariants}
          className=" border-x-[39px] border-y-[30px] max-w-[80vw] md:max-w-[60vw]"
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

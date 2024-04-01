import { Data } from "./processData";
import SVGcomponent from "./processsvg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function ProcessPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="p-12 flex flex-col gap-10 justify-center items-center md:p-20"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className=" " variants={cardVariants}>
        <h1 className="text-4xl font-bold"> {t("abt-us-pr-flw-ttl")}</h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {Data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="p-5 mb-8 md:mb-0 shadow-md border border-slate-200 rounded-md"
              variants={cardVariants}
            >
              <div className="flex items-center gap-2">
                <div>
                  <SVGcomponent />
                </div>
                <div>
                  <h1 className="font-semibold font-3xl mt-2 mb-2 md:mt-4 md:mb-4">
                    {t(`${item.title}`)}
                  </h1>
                </div>
              </div>
              <h1 className="font-semibold font-3xl mt-2 mb-2 md:mt-4 md:mb-4">
                {t(`${item.title}`)}
              </h1>
              <p className="text-base ">{t(`${item.content}`)}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ProcessPage;

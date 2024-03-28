import { Data } from "./processData";
import SVGcomponent from "./processsvg";
import { useTranslation } from "react-i18next";
import { motion, } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";


function ProcessPage() {
    const {t}= useTranslation()
  return (
    <motion.div className="p-12 flex flex-col gap-10 justify-center items-center md:p-20" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}>
      <motion.div className=" " variants={cardVariants}>
              <h1 className="text-4xl font-bold"> { t("abt-us-pr-flw-ttl")}</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:space-x-12 md:p-12">
        {Data.map((item) => {
          return (
            <motion.div key={item.id} className="mb-8 md:mb-0" variants={cardVariants}>
              <div>
                {" "}
                <SVGcomponent />{" "}
              </div>
              <h1 className="font-semibold font-3xl mt-2 mb-2 md:mt-4 md:mb-4">
                {t(`${item.title}`)}
              </h1>
              <p className="text-base ">{ t(`${item.content}`)}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ProcessPage;

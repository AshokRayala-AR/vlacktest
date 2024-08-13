import { UiData } from "./UiData";
import UiCard from "./UiCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
export default function UiCardWrapper() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col w-full gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      
      <motion.div
        className="grid grid-cols-1 gap-y-8 md:gap-x-5 md:gap-y-14 md:grid-cols-2"
        variants={cardVariants}
      >
        {UiData.map((item, index) => {
          return (
            <div key={index}>
              <UiCard item={item} />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

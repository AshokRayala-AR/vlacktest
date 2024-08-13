import {FigmaData}  from "./FigmaData";
import FigmaCard from "./FigmaCard";

import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
export default function FigmaCardWrapper() {
  
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
        {FigmaData.map((item, index) => {
          return (
            <div key={index}>
              <FigmaCard item={item} />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

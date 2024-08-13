import AllData from "./AllData";
import AllCard from "./AllCard";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
export default function AllCardWrapper() {
  
  return (
    <motion.div
      className="flex flex-col w-full gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
     
      <motion.div
        className="grid grid-cols-1 gap-y-8 gap-x-5 gap-y-14 md:grid-cols-1"
        variants={cardVariants}
      >
        {AllData.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <AllCard item={item} />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

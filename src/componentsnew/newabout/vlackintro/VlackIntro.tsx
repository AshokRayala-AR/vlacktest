import logoVlack from "../../../assets/images/logoVlack.png";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
export default function VlackIntro() {
  return (
    <motion.div
      className="bg-black flex flex-col md:flex-row justify-center items-center p-8 gap-8 md:p-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className="order-1 md:order-2 flex justify-center items-center w-full md:w-3/6">
        <img src={logoVlack} alt="logovlack" className="w-3/6 md:w-4/6" />
      </div>

      <div className="order-2 md:order-1 flex flex-col gap-4 justify-center items-start w-full md:w-4/6">
        <p className="bg-gradient-to-r from-[#f87005] to-[#ecbe28] bg-clip-text text-transparent text-5xl font-semibold">
          Vlack
        </p>
        <p className="text-slate-400 leading-normal text-md tracking-normal">
          Our name Vlack and our logo of birds flying in a V are inspired by the
          scientific name of a bird. Just as this formation helps birds save
          energy and reduce fatigue over long distances and through
          ever-changing environments, we aspire to help financial institutions
          run more smoothly by reducing overhead, automating processes and
          ensuring compliance with increasingly demanding consumer needs and
          complicated regulatory requirements.
        </p>
      </div>
    </motion.div>
  );
}

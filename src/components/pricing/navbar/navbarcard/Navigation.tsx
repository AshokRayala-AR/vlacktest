import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavListComplData } from "./NavListData.ts";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="nav-ul  shadow-lg absolute h-screen right-0 top-[90px] p-[25px] w-[250px]  bg-white"
  >
    {NavListComplData.map((item, index: number) => (
      <MenuItem item={item} key={index} />
    ))}
  </motion.ul>
);

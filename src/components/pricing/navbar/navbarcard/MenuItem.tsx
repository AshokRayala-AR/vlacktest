import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavTypes } from "../../../../utils/types/Types.ts";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, closeMenu }: { item: NavTypes, closeMenu: () => void }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={item.route}
        className="nav-li shadow-md px-4 py-2  text-[#1C1E53] "
        onClick={closeMenu}
      >
        {t(`${item.navLink}`)}
      </NavLink>
    </motion.div>
  );
};

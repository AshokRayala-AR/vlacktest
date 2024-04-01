import { useRef, useEffect, RefObject } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef:RefObject<HTMLDivElement> = useRef(null);
  const { height } = useDimensions(containerRef);

  const closeMenu = () => {
    toggleOpen();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const targetNode = event.target as Node; 
      if (
        containerRef.current &&
        !containerRef.current.contains(targetNode) &&
        isOpen
      ) {
        toggleOpen();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, isOpen, toggleOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation closeMenu={closeMenu} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

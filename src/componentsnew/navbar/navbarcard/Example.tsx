import { useRef, useEffect, useState, RefObject } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
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
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isAnimating, setIsAnimating] = useState(false);

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
  }, [containerRef, isOpen]);
  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const onAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className=""
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div variants={sidebar} />
      {isOpen || isAnimating ? <Navigation closeMenu={toggleOpen} /> : null}
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

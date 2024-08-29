import { Variants } from "framer-motion";

export const cardVariants: Variants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: -10,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      }
    }
  };

  export const imageVariants: Variants = {
    offscreen: {
      x: -200
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2.5,
      }
    }
  };
  
  export const imageVariantsFromRight: Variants = {
    offscreen: {
      x: 100
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2.5,
      }
    }
  };
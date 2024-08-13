import Typewriter from "react-typewriter-effect";
import welcomeimg3 from "../../../assets/images/welcomeimg3.png";
import { motion } from "framer-motion";

function Welcomec() {
  return (
    <div className="flex flex-col items-center justify-around max-w-screen lg:h-screen bg-no-repeat bg-cover bg-[#080808] relative overflow-hidden md:flex-row md:justify-start lg:p-24 md:p-16 p-4 mb-4">
      <div className="xl:w-4/6 md:w-3/6 text-center flex justify-center">
        <div className="w-full h-full py-8 text-center">
          <h1 className="text-3xl md:text-5xl xl:text-6xl text-center font-semibold md:font-bold bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent leading-relaxed md:leading-snug xl:leading-tight tracking-wide">
            <Typewriter
              text="Embrace the dawn of Artificial Intelligence"
              cursorColor="#f87005"
              textStyle={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
              }}
              typeSpeed={70}
              startDelay={100}
              loop={0}
            />
          </h1>
        </div>
      </div>
      <motion.div
        className="lg:w-3/6 lg:h-full lg:absolute lg:bottom-0 lg:-right-6"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.09, 1] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={welcomeimg3}
          alt="welcomeimg3"
          className="lg:h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Welcomec;

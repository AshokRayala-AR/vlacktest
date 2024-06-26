import { useTranslation } from "react-i18next";
import vlackIntro from "../../../assets/videos/vlackIntro.mp4";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function WelcomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef: any = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error: Error) => console.log("Video play failed", error));
    }
  }, []);
  return (
    <motion.div
      className="text-white bg-[#1C1E53]  flex flex-col gap-8  w-full  p-6 pt-14  lg:flex-row justify-center items-center lg:p-24 "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className=" w-full flex flex-col items-center gap-10  lg:w-3/6 lg:p-10"
        variants={cardVariants}
      >
        <h1 className=" text-3xl font-semibold  lg:text-4xl lg:leading-[66px]">
          {t("home-comp-header")}
        </h1>
        <p className="text-lg">{t("home-comp-description")}</p>
        <div className="flex justify-left gap-8 items-center">
          <button
            onClick={() => {
              navigate("/portfolio");
            }}
            className="home-comp-btn-view-work text-sm text-black px-7 py-3 rounded-full bg-[#FCD980] "
          >
            {t("home-comp-btn-view-work")}
          </button>
          <a href="" className="text-sm">
            {t("home-comp-link-view-pricing")}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="w-full h-full flex justify-center  md:w-3/6  lg:p-5 "
        variants={cardVariants}
      >
        <video
          ref={videoRef}
          id="welcomeVideo"
          className="md:min-h-[340px] md:min-w-[450px] w-full rounded-md"
          controls
        >
          <source src={vlackIntro} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}

import { useTranslation } from "react-i18next";
import pic2 from "../../../assets/images/pic2.jpeg";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function WhoWeArePage() {
  const { t } = useTranslation();
  return (
    <motion.div className="flex flex-wrap p-5 md:18 lg:p-32 justify-center w-screen " 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}>
      <motion.div className=" md:flex  bg-[#F4F5F5] md:p-4" variants={cardVariants}>
        <div className=" w-full mr-16 p-8">
          <h5 className="font-medium mb-2">{t("abt-us-wwa-ttl")}</h5>
          <h1 className="text-2xl font-semibold md:font-bold mb-2">{t("abt-us-wwa1-ttl")}</h1>
          <p className="text-base mb-2">{t("abt-us-wwa1-desc")}</p>
        </div>

        <div className=" w-full  p-8 ">
          <h1 className="text-2xl font-bold mb-2 mt-6">
            {t("abt-us-wwa2-ttl")}
          </h1>
          <p className="text-base mb-2">{t("abt-us-wwa2-desc")}</p>
        </div>
      </motion.div>

      <motion.div className="  md:h-3/6 lg:h-4/6  w-full " variants={cardVariants}>
        <img
          src={pic2}
          className="py-4 px-6 max-h-[350px] w-full object-cover object-center md:px-0"
        />
      </motion.div>
    </motion.div>
  );
}
export default WhoWeArePage;

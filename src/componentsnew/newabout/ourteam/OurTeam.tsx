import thankYouImage from "../../../assets/images/thankyou.jpg";
import {motion} from 'framer-motion';
import { cardVariants } from "../../../utils/scrolls/Scroll";
import { OurTeamData } from "./OurTeamData";

export default function ThankYouComp() {
  return (
    <motion.div
      className="md:h-[100vh] md:bg-[#141414] py-24 md:py-18 lg:py-16 md:flex-row justify-center items-center flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className="h-full md:w-[40vw] flex justify-center items-center">
        <div className="bg-[#f87005] rounded-full">
          <img
            src={thankYouImage}
            alt="thank you"
            className="md:w-[20vw]  max-w-[250px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[400px] rounded-full p-1"
          />
        </div>
      </div>
      <div className="text-white p-4 md:w-[70vw] w-full md:pr-24 flex flex-col justify-center items-center gap-4">
        <h1 className="py-3 text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#f87005] to-[#E6C24A] bg-clip-text text-transparent tracking-wide font-medium leading-[66px]">
          Our Experienced Team
        </h1>
        <p className="mt-2 text-sm sm:text-sm md:text-md">
          Our team is led by a group of experienced and visionary professionals
          who are dedicated to driving innovation and excellence in every
          project we undertake.
        </p>
        <motion.div className="mt-6 flex flex-col justify-between items-center lg:flex-row gap-5 w-full"variants={cardVariants}>
          <div className=" flex flex-col   text-white tracking-wide backdrop-blur-lg bg-opacity-20 hover:bg-opacity-30 rounded-2xl shadow-md shadow-[#f87005] xl:px-8">
            <div className=" flex flex-col w-full p-6">
              <div className="flex  flex-col justify-center items-center gap-2 ">
                <h1 className="text-white text-3xl">
                  {OurTeamData[0].designation}
                </h1>
                <p className="text-xl">{OurTeamData[0].name}</p>
                <p className="text-sm">{OurTeamData[0].mail}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            {OurTeamData.slice(1).map((item, index) => (
              <div
                key={index}
                className=" flex flex-col justify-between gap-3 text-white tracking-wide backdrop-blur-lg bg-opacity-20 hover:bg-opacity-30 rounded-2xl shadow-md shadow-[#f87005] p-6 xl:px-8"
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-3xl">{item.designation}</h1>
                  <p className="text-xl">{item.name}</p>
                  <p className="text-sm">{item.mail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

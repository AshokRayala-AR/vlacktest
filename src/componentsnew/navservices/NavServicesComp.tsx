import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavServicesData } from "./NavServicesData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavServicesComp() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const [selectedService, setSelectedService] = useState(NavServicesData[0]);
  const { t } = useTranslation();

  useEffect(() => {
    const index = getServiceIndex(serviceName);
    setSelectedService(NavServicesData[index]);
  }, [serviceName]);

  function getServiceIndex(serviceName: string | undefined): number {
    switch (serviceName) {
      case "services-ai":
        return 0;
      case "services-as":
        return 1;
      case "services-cs":
        return 2;
      case "services-do":
        return 3;
      case "services-dt":
        return 4;
      case "services-da":
        return 5;
      default:
        return 0;
    }
  }

  return (
    <div className=" bg-black main_head flex justify-center items-center">
      <div className="md:mt-12  flex flex-row justify-center items-center md:grid md:grid-cols-3 md:gap-12 gap-6 lg:w-5/6 py-10 overflow-x-auto sm:overflow-y-auto hide-scrollbar">
        {selectedService.map((item, idx) => (
          <div
            key={idx}
            className={`min-w-[280px] h-full text-white backdrop-blur-lg bg-white bg-opacity-20 hover:bg-opacity-30 flex flex-col gap-4 p-4 md:rounded-2xl rounded-lg hover:shadow-lg hover:shadow-[#ffc8a4] relative`}
          >
            <motion.div 
              className="flex justify-start items-center absolute"
              animate={{
                top: -32,
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
            >
              <img
                src={item.img}
                alt="svg"
                className="md:max-w-16 md:max-h-16 max-w-12"
              />
            </motion.div>

            <div className="flex flex-col md:mt-14 mt-10 gap-4 tracking-wide md:pt-8 pt-2">
              <div className="flex justify-between">
                <h1 className="md:text-lg text-lg font-medium text-[#f87005]">
                  {t(`${item.title}`)}
                </h1>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                {t(`${item.content}`)}
              </p>
              <p>
                <a
                  href="#"
                  className="text-red-600 tracking-normal font-bold text-sm"
                >
                  {t("readmore")}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavServicesComp;

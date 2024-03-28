import { Data } from "./BenefitsData";

import { useTranslation } from "react-i18next";

function BenefitsPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-96 text-center align-center mt-8">
        <h1 className="font-bold text-3xl">{t("abt-us-benfits-ttl")}</h1>
      </div>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-8 w-5/6 mb-4 ">
        {Data.map((item) => (
          <div className=" md:text-left p-6 bg-[#f4f6fc] ">
            <div className="flex justify-center mb-4 md:justify-start">
              <item.svg />{" "}
            </div>
            <h1 className="flex justify-center text-xl font-semibold mb-4 md:justify-start">
              {t(`${item.title}`)}
            </h1>
            <p className="text-justify mb-4">{t(`${item.content}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsPage;

import { useTranslation } from "react-i18next";
import ourdesign1 from "../../../assets/images/ourdesign1.png";

function OurDesignPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-5 gap-6 sm:p-8 lg:flex-row lg:justify-center lg:p-14  ">
      <div className="flex flex-col justify-center gap-6 lg:w-3/6 lg:text-left lg:flex lg:gap-6 ">
        <h5 className="font-bold lg:font-semibold ">{t("abt-us-ttl-span")}</h5>
        <h1 className="text-2xl lg:text-4xl font-semibold">
          {t("abt-us-ttl")}
        </h1>
      </div>
      <div className="lg:w-3/6">
        <img
          src={ourdesign1}
          className=" md:w-full md:h-[400px] object-center object-cover"
        />
      </div>
    </div>
  );
}

export default OurDesignPage;

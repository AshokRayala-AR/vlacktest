import { useTranslation } from "react-i18next";
import ourdesign1 from "../../../assets/images/ourdesign1.png";

function OurDesignPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row md:space-x-36 md:justify-center p-14 space-y-4 ">
      <div className="flex flex-col justify-center gap-6 md:w-3/6 md:text-left md:flex flex-col md:gap-6 ">
        <h5 className="font-bold md:font-semibold ">{t("abt-us-ttl-span")}</h5>
        <h1 className="text- text-5xl font-semibold">{t("abt-us-ttl")}</h1>
      </div>
      <div className="lg:w-3/6">
        <img src={ourdesign1} className=" md:h-full " />
      </div>
    </div>
  );
}

export default OurDesignPage;

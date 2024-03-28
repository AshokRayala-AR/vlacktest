import { useTranslation } from "react-i18next";
import WelcomeSvg from "./WelcomeSvg";
import { Link } from "react-router-dom";
export default function WelcomePage() {
  const { t } = useTranslation();
  return (
    <div className="text-white bg-[#1C1E53]  flex flex-col gap-6 w-full border border-salte-600 p-6 lg:flex-row justify-center items-center lg:p-24">
      <div className=" w-full flex flex-col items-center gap-6  lg:w-3/6 lg:p-10  ">
        <h1 className=" text-3xl font-semibold  lg:text-5xl lg:leading-[66px]">
          {t("home-comp-header")}
        </h1>
        <p className="text-lg">{t("home-comp-description")}</p>
        <div className="flex justify-left gap-8 items-center">
          <button className="home-comp-btn-view-work text-sm text-black px-7 py-3 rounded-full bg-[#FCD980] ">
            {t("home-comp-btn-view-work")}
          </button>
          <Link to='/pricing' className="text-sm">
            {t("home-comp-link-view-pricing")}
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-center  lg:w-3/6 lg:p-5 ">
        <WelcomeSvg />
      </div>
    </div>
  );
}

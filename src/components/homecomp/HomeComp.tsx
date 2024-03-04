import { useTranslation } from "react-i18next";
export default function HomeComp() {
  const { t } = useTranslation();
  return (
    <div className="lg:flex justify-center items-center text-white bg-customHomeBack  min-h-screen p-20 ">
      <div className="w-3/6 flex flex-col gap-10 p-10 h-full ">
        <h1 className="line-clamp-3 text-5xl font-semibold ">
          {t("home-comp-header")}
        </h1>
        <p className="text-lg">{t("home-comp-description")}</p>
        <div className="flex justify-left gap-8 items-center">
          <button className="home-comp-btn-view-work text-sm text-black px-7 py-3 rounded-full bg-customBeige ">
            {t("home-comp-btn-view-work")}
          </button>
          <a href="" className="text-sm">
            {t("home-comp-link-view-pricing")}
          </a>
        </div>
      </div>
      <div className="w-3/6 p-10  h-full"></div>
    </div>
  );
}
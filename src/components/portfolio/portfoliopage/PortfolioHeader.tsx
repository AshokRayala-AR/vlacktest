import { useTranslation } from "react-i18next";
export default function PortfolioHeader() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 py-4 px-2 text-center w-full lg:px-20 lg:py-12 bg-[#F4F6FC] ">
      <p className="text-base">{t("prtfl-ttl-span")}</p>
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold ">
        {t("prtfl-ttl")}
      </h1>
      <p className="text-base">{t("prtfl-desc")}</p>
    </div>
  );
}

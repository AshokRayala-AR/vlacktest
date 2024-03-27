import { useTranslation } from "react-i18next";
export default function DesignHeader() {
  const { t } = useTranslation();
  return (
    <div className="text-left flex flex-col gap-1 lg:pr-8">
      <p className="text-base font-semibold">{t("dsgn-case-ttl-span")}</p>
      <h1 className="text-3xl lg:text-4xl font-semibold lg:leading-[52px]  lg:w-3/6">
        {t("dsgn-case-ttl")}
      </h1>
      <p className="text-base">{t("dsgn-case-ttl-desc")}</p>
    </div>
  );
}

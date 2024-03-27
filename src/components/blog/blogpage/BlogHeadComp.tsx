import { useTranslation } from "react-i18next";
export default function BlogHeader() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col text-center gap-6 w-full">
      <h1 className="text-3xl font-semibold">{t("blog-head-ttl")}</h1>
      <p className="text-sm">{t("blog-head-andrew")}</p>
      <img
        src="src/assets/images/bloghead.jpg "
        className="h-[300px] object-cover"
        alt=""
      />
      <p>{t("blog-head-desc")}</p>
      <p className="text-sm text-[#2405F2]">{t("blog-rdmr")}</p>
    </div>
  );
}

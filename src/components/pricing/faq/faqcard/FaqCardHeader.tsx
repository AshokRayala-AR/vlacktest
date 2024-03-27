import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function FaqCardHeader() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl font-semibold line-clamp-2 pt-2">
        {t("faq-ttl")}
      </h1>
      <Link to="/contact">
        <small className="text-[#2405F2]">{t("faq-desc")}</small>
      </Link>
    </div>
  );
}

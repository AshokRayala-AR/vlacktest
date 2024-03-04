import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div>
      <nav className="bg-black text-white text-sm p-0 m-0">
        <ul className="flex justify-end items-center gap-8 py-3 pr-8 ">
          <li>{t("nav-home")}</li>
          <li>{t("nav-aboutus")}</li>
          <li>{t("nav-features")}</li>
          <li>{t("nav-pricing")}</li>
          <li>{t("nav-faq")}</li>
          <li>{t("nav-blog")}</li>
          <li>
            <button className="px-8 py-2 border border-white rounded-full">
              {t("nav-btn-contactus")}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
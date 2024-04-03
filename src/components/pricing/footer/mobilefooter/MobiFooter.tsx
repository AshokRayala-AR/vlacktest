import logoVlack from "../../../../assets/images/logoVlack.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
export default function MobiFooter() {
  const { t } = useTranslation();
  return (
    <div className="border-t border-white text-white bg-[#1C1E53] text-sm flex flex-col gap-3 py-5 px-4 sm:hidden">
      <div className="flex text-red-500 justify-center items-center">
        <img src={logoVlack} alt="" className="w-8 h-8" />
        <h2 className="text-2xl">{t("ftr-finswt-ttl")}</h2>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">{t("mobl-ftr-rch-us")}</h1>
          <div>
            <img src="" alt="" />
            <p>{t("ftr-call-num")}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>{t("ftr-email")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">{t("mobl-ftr-company")}</h1>
          <p>{t("mobl-ftr-about")}</p>
          <p>{t("mobl-ftr-contact")}</p>
          <p>{t("mobl-ftr-blogs")}</p>
        </div>
      </div>
      <div className="mb-4">
        <img src="" alt="" />
        <p className="w-4/6">{t("mobl-ftr-address")}</p>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 h-[200px]">
          <h1 className="text-lg font-semibold">{t("")}</h1>
          <h1>{t("mobl-ftr-legal")}</h1>
          <h1>{t("mobl-ftr-pri-pol")}</h1>
          <h1>{t("mobl-ftr-terms-serv")}</h1>
          <h1>{t("mobl-ftr-terms-use")}</h1>
          <h1>{t("mobl-ftr-refnd")}</h1>
          <h1>{t("mobl-ftr-follow")}</h1>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <>
              <li className="text-lg font-semibold">QuickLinks</li>
              <ul className="flex flex-col gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">AboutUs</NavLink>
                <NavLink to="/feature">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">ContactUs</NavLink>
              </ul>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

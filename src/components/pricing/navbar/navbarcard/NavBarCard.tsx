import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <nav className="bg-black text-white text-sm p-0 m-0">
        <ul className="flex justify-end items-center gap-8 py-3 pr-8 ">
          <li className={`hover:cursor-pointer`} onClick={()=>{navigate("/")}}>{t("nav-home")}</li>
          <li className={`hover:cursor-pointer`} onClick={()=>{navigate("/about")}}>{t("nav-aboutus")}</li>
          <li className={`hover:cursor-pointer`}>{t("nav-features")}</li>
          <li className={`hover:cursor-pointer`} onClick={()=>{navigate("pricing")}}>{t("nav-pricing")}</li>
          <li className={`hover:cursor-pointer`} onClick={()=>{navigate("faq")}} >{t("nav-faq")}</li>
          <li className={`hover:cursor-pointer`} onClick={()=>{navigate("blogs")}}>{t("nav-blog")}</li>
          <li>
            <button className="px-8 py-2 border border-white rounded-full" onClick={()=>{navigate("contact")}}>
              {t("nav-btn-contactus")}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

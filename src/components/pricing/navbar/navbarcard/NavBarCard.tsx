import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/images/logoVlack.png";
export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="">
      <nav className="bg-black text-white text-sm p-0 m-0 flex justify-between py-3 px-2 pr-8 fixed top-0 z-50">
        <div className={`flex items-center`}>
          <img src={Logo} className=" h-[60%] md:w-[10%]" alt="pic4" />
          <div className={` text-red-500 ml-3 py-3`}>
            <h6 className={`text-4xl`}>Vlack</h6>
            <h6 className={`ml-3`}>Solutions Pvt Lit</h6>
          </div>
        </div>
        <div>
          <ul className="flex justify-center self-center items-center gap-8 h-full">
            <NavLink className={`hover:cursor-pointer `} to="/">
              <li
                className={`hover:cursor-pointer `}
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("nav-home")}
              </li>
            </NavLink>
            <NavLink className={`hover:cursor-pointer w-fit`} to="/about">
              {t("nav-aboutus")}
            </NavLink>
            <NavLink to="/features" className={`hover:cursor-pointer`}>
              {t("nav-features")}
            </NavLink>
            <NavLink to="/pricing" className={`hover:cursor-pointer`}>
              {t("nav-pricing")}
            </NavLink>
            <NavLink to="/faq" className={`hover:cursor-pointer py-2`}>
              {t("nav-faq")}
            </NavLink>
            <NavLink to="/blogs" className={`hover:cursor-pointer`}>
              {t("nav-blog")}
            </NavLink>
            <NavLink to="/contact">
              <button
                className="px-8 py-2 border border-white rounded-full"
                onClick={() => navigate("/contact")}
              >
                {t("nav-btn-contactus")}
              </button>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

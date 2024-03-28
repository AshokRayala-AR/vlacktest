import { useTranslation } from "react-i18next";
import { Example } from "./Example";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/images/logoVlack.png";
import NavListComp from "./NavListComp";
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <nav className="bg-black text-white text-sm p-0 m-0 w-full flex justify-between items-center py-3 px-2 pr-8 fixed top-0 z-50">
        <NavLink to="/">
          <div className={`flex items-center`}>
            <div>
              <img src={Logo} className=" w-16" alt="pic4" />
            </div>
            <div className={` text-red-500 ml-3 `}>
              <h6 className={`text-4xl`}>Vlack</h6>
              <h6 className={`ml-3`}>Solutions Pvt Lit</h6>
            </div>
          </div>
        </NavLink>
        <div className="flex justify-center items-center">
          <div className="md:hidden">
            <Example />
          </div>
          <div className="hidden md:flex">
            <NavListComp />
          </div>
        </div>
      </nav>
    </div>
  );
}

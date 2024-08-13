import { useNavigate } from "react-router-dom";
import { NavListComplData } from "./NavListData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import downarrow from "../../../assets/svg/downarrow.svg";

export default function NavListComp() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (navLink: string) => {
    setActiveDropdown(navLink);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavLinkClick = (item: any) => {
    if (item.childNav) {
      const firstChildRoute = `/${item.route.split("/")[1]}/${
        item.childNav[0]
      }`;
      navigate(firstChildRoute);
    } else {
      navigate(item.route);
    }
  };

  const handleChildNavClick = (child: string, item: any) => {
    const route = `/${item.route.split("/")[1]}/${child}`;
    navigate(route);
  };

  const { t } = useTranslation();

  return (
    <ul className="flex text-[#f87005] text-md font-semibold justify-center self-center items-center lg:gap-10 gap-4 h-full ">
      {NavListComplData.map((item, index) => (
        <div
          key={index}
          className="flex items-center"
          onMouseEnter={() => item.childNav && handleMouseEnter(item.navLink)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-end">
            <span
              className="duration-300 hover:text-white cursor-pointer"
              onClick={() => handleNavLinkClick(item)}
            >
              {t(item.navLink)}
            </span>

            {item.childNav && (
              <img src={downarrow} alt="downarrow" className="w-4  block" />
            )}
          </div>

          {item.childNav && (
            <div
              className={`absolute top-[45px] left-[0] bg-slate-300 text-black font-normal text-sm ${
                item.navLink === activeDropdown ? "block" : "hidden"
              } p-4 rounded-md`}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 w-screen border-3 border-red-800">
                {item.childNav.map((child, childIndex) => (
                  <li key={childIndex}>
                    <span
                      className="block p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#f87005]/30 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChildNavClick(child, item);
                      }}
                    >
                      {t(child)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}

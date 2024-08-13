import { useNavigate } from "react-router-dom";
import { NavListComplData } from "./NavListData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import downarrow from "../../../assets/svg/downarrow.svg";
import {NavListItem} from "../../../utils/types/Types"

export default function NavListComp() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (navLink: string) => {
    setActiveDropdown(navLink);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavLinkClick = (item: NavListItem) => {
    if (item.childNav) {
      const firstChildRoute = `/${item.route.split("/")[1]}/${
        item.childNav[0]
      }`;
      navigate(firstChildRoute);
    } else {
      navigate(item.route);
    }
  };

  const handleChildNavClick = (child: string, item: NavListItem) => {
    const route = `/${item.route.split("/")[1]}/${child}`;
    navigate(route);
  };

  const { t } = useTranslation();

  return (
    <ul className="flex text-[#f87005] text-md font-semibold justify-center self-center items-center lg:gap-10 gap-4 h-full ">
      {NavListComplData.map((item: NavListItem, index) => (
        <div
          key={index}
          className="flex items-center"
          onMouseEnter={() => item.childNav && handleMouseEnter(item.navLink)}
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
              className={`absolute top-full left-[0] shadow-xl shadow-[#f87005]/30 backdrop-blur-3xl bg-black bg-opacity-60 w-[100%] text-white font-normal text-sm ${
                item.navLink === activeDropdown ? "block" : "hidden"
              } p-4 rounded-md`}
              onMouseLeave={handleMouseLeave}

            >
              <ul className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 w-screen border-3 border-red-800" >
                {item.childNav.map((child: string, childIndex: number) => (
                  <li key={childIndex}>
                    <span
                      className="block border-r p-1 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#141414]/30 cursor-pointer"
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

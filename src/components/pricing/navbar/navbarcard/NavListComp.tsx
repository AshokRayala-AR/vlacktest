import { NavLink } from "react-router-dom";
import { NavListComplData } from "./NavListData";
import { useTranslation } from "react-i18next";
export default function NavListComp() {
  const { t } = useTranslation();
  return (
    <ul className="flex justify-center self-center items-center gap-8 h-full">
      {NavListComplData.map((item, index) => (
        <NavLink key={index} to={item.route}>
          {t(`${item.navLink}`)}
        </NavLink>
      ))}
    </ul>
  );
}

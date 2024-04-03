import { NavLink, To } from "react-router-dom";
import { NavListComplData } from "./NavListData";
import { useTranslation } from "react-i18next";

export default function NavListComp() {
  const { t } = useTranslation();
  return (
    <ul className="flex justify-center self-center items-center gap-8 h-full">
      {NavListComplData.map(
        (item: { route: To; navLink: To }, index: number) => (
          <NavLink key={index} to={item.route}>
            {t(`${item.navLink}`)}
          </NavLink>
        ),
      )}
    </ul>
  );
}

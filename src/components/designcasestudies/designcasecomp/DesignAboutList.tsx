import DesignListDot from "./DesignListDot";
import { DesignPropType } from "../../../utils/types/Types";

import { useTranslation } from "react-i18next";
export default function DesignAboutList({ itemDl }: {itemDl: DesignPropType }) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 items-center">
      <DesignListDot />
      <li className="leading-10">{t(`${itemDl}`)}</li>
    </div>
  );
}

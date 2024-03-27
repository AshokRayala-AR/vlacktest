import DesignListDot from "./DesignListDot";
import { useTranslation } from "react-i18next";
export default function DesignAboutList({ item }) {
  const {t}=useTranslation()
  return (
    <div className="flex gap-4 items-center">
      <DesignListDot />
      <li className="leading-10">{t(`${item}`)}</li>
    </div>
  );
}

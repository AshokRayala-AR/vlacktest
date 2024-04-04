import DesignListDot from "./DesignListDot";

import { useTranslation } from "react-i18next";
export default function DesignAboutList({ item }: { item: string }) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 items-start">
      <DesignListDot />
      <li className="lg:leading-10 leading-8">{t(`${item}`)}</li>
    </div>
  );
}

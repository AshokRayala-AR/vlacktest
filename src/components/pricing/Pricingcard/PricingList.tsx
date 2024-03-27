import PricingListSvg from "./PricingListSvg";

import { useTranslation } from "react-i18next";
export default function PricingList({ listItem }) {
  const {t}= useTranslation()

  return (
    <div className="flex gap-4 pb-2">
      <PricingListSvg />
      <li>{t(`${listItem}`)}</li>
    </div>
  );
}

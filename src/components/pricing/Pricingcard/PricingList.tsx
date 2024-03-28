import PricingListSvg from "./PricingListSvg";
// import { PricePropType } from "../../../utils/types/Types";

import { useTranslation } from "react-i18next";
export default function PricingList({ listItem }: {listItem: string}) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 pb-2">
      <PricingListSvg />
      <li>{t(`${listItem}`)}</li>
    </div>
  );
}

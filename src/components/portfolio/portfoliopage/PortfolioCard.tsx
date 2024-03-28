import { useTranslation } from "react-i18next";
import { PortfolioType } from "../../../utils/types/Types";
export default function PortfolioCard({
  item,
  key,
}: {
  item: PortfolioType;
  key: number;
}) {
  const { t } = useTranslation();

  return (
    <div key={key} className="flex flex-col gap-2 items-center">
      <div className=" ">
        <img
          className="w-screen border-x-[39px] border-y-[30px] md:w-[545px] h-[317px]  object-contain object-center"
          style={{
            borderImage: `${item.border}`,
          }}
          src={item.img}
          alt="some"
        />
      </div>
      <div className="flex flex-col itemPos-start md:gap-y-5 gap-y-2">
        <h1 className="text-xl font-semibold">{t(`${item.title}`)}</h1>
        <p className="text-sm">{t(`${item.description}`)}</p>

        <a className="text-sm font-medium" href="">
          {t(`${item.view}`)}
        </a>
      </div>
    </div>
  );
}

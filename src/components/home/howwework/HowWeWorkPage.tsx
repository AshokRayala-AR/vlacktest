import { data } from "./HowWeWorkData.tsx";
import { useTranslation } from "react-i18next";
import Icon from "./Icon.tsx";
import { Link } from "react-router-dom";
export default function HowWeWorkPage() {
  const { t } = useTranslation();
  return (
    <div className=" flex justify-center items-center bg-[#F4F6FC] p-5 lg:pt-20 md:px-14 md:pt-10">
      <div className=" xl:flex justify-center items-start xl:gap-8 ">
        <div className="flex flex-col items-center w-full text-center xl:flex xl:items-start xl:w-2/6 xl:text-left ">
          <h1 className="font-bold text-3xl p-2">how we work</h1>
          <p className="p-2 w-4/6  xl:w-full">{t("h-w-w-desc")}</p>
          <Link to="/contact" className=" text-customblue p-2 font-semibold">
            {t("h-w-w-link")} &rarr;
          </Link>
        </div>
        <div className="p-5 gap-4 grid grid-cols-1 xl:w-3/6 xl:px-0 sm:grid-cols-2 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-center xl:text-left  shadow-md border border-slate-200 rounded-md p-5 z-0"
            >
              <div className={`z-10`}>
                <Icon item={item} />
              </div>
              <h2 className="text-2xl font-medium p-2">{t(`${item.title}`)}</h2>
              <p className="text-balance p-2">{t(`${item.content}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

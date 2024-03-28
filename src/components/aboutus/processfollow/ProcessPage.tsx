import { Data } from "./processData";
import SVGcomponent from "./processsvg";
import { useTranslation } from "react-i18next";
function ProcessPage() {
  const { t } = useTranslation();
  return (
    <div className="p-5 flex flex-col gap-10 justify-center items-center md:p-14 lg:p-24">
      <div className=" ">
        <h1 className="text-4xl font-bold"> {t("abt-us-pr-flw-ttl")}</h1>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className="p-5 mb-8 md:mb-0 shadow-md border border-slate-200 rounded-md"
            >
              <div className="flex items-center gap-2">
                <div>
                  <SVGcomponent />
                </div>
                <div>
                  <h1 className="font-semibold font-3xl mt-2 mb-2 md:mt-4 md:mb-4">
                    {t(`${item.title}`)}
                  </h1>
                </div>
              </div>

              <p className="text-base ">{t(`${item.content}`)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessPage;

import { useTranslation } from "react-i18next";
export default function ProjectsComp() {
  const { t } = useTranslation();
  return (
    <div className="  h-screen">
      <div className=" w-full h-1/6  ">
        <div className="flex justify-between items-end">
          <span className="text-2xl font-semibold">
            {t("project-comp-nav-header")}
          </span>
          <span className="pr-5">{t("project-comp-nav-link")}</span>
        </div>
      </div>
      <div className="h-5/6 flex ">
        <div className="relative flex  w-4/6 h-full  mr-4">
          <div className="absolute inset-0  w-5/6 h-5/6 bg-projects-primary transform translate-x-[70px]     translate-y-[45px] bg-cover bg-center"></div>
          <div className="w-2/5 h-full bg-projecttransparantcard absolute left-0 flex items-end ">
            <div className="h-3/6 flex flex-col justify-end p-8 gap-5 text-white">
              <h1 className="text-xl font-bold">
                {t("project-comp-primarycard-header")}
              </h1>
              <p>{t("project-comp-primarycard-description")}</p>
              <a href="">{t("project-comp-primarycard-link")}</a>
            </div>
          </div>
          <div className="w-3/6 h-full bg-gradient-to-b from-blue-200 to-cyan-300"></div>
          <div className="w-3/6 h-full bg-gradient-to-b from-projectsprimarygradient1 to-projectsprimarygradient2"></div>
        </div>
        <div className="relative w-2/6 h-full bg-projects-secondary bg-cover bg-center">
          <div className="absolute w-full h-3/6 bg-projecttransparantcard p-10 text-white flex items-end">
            <div className="">
              <h1 className="font-bold text-xl line-clamp-2 mb-6">
                {t("project-comp-secondarycard-header")}
              </h1>
              <a href="">{t("project-comp-secondarycard-link")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
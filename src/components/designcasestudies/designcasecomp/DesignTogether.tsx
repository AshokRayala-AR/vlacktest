import { useTranslation } from "react-i18next";
export default function DesignTogether() {
  const {t}=useTranslation()
  return (
    <div className=" text-center flex flex-col gap-5 justify-center items-center ">
      <h1 className=" text-2xl lg:line-clamp-2 lg:text-5xl font-semibold lg:leading-[64px]  lg:w-5/6">
        {t("prtfl-bld-tgthr-ttl")}
      </h1>
      <p className="w-full md:line-clamp-2 md:w-5/6 lg:w-4/6">
        {t("prtfl-bld-tgthr-desc")}
      </p>
      <button className="px-8 py-3 w-[180px] bg-[#FCD980]  text-black rounded-full">
        {t("cntct-us-ttl")}
      </button>
    </div>
  );
}

import logoVlack from "../../../../assets/images/logoVlack.png";
import { useTranslation } from "react-i18next";
export default function FooterCard() {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col mt-10">
      <div className="bg-[#1C1E53] text-white flex flex-col md:flex-row md:jusitfy-center md:items-center md:px-14 md:pt-14 md:items-baseline ">
        <div className="flex flex-col pt-2 text-center  md:text-left md:w-3/6 md:px-8  ">
          <div className="flex flex-col items-center justify-center md:items-start gap-5">
            <div className="flex gap-2">
              <img src={logoVlack} alt="" className="w-8 sm:w-10" />
              <h2 className="text-2xl">{t("ftr-finswt-ttl")}</h2>
            </div>
            <p className="text-sm">{t("ftr-finswt-desc")}</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#FCD980] mt-10 text-black lg:flex-row justify-around px-5 py-2 text-sm font-medium">
            <div>
              <p>{t("ftr-email-ttl")}</p>
              <p>{t("ftr-email")}</p>
            </div>
            <div>
              <p>{t("ftr-call-ttl")}</p>
              <p>{t("ftr-call-num")}</p>
            </div>
          </div>
        </div>
        <div className=" pt-2 flex flex-col gap-4 text-center md:text-left md:w-3/6 px-8 ">
          <h1 className=" text-2xl ">{t("ftr-talk-ttl")}</h1>
          <p className="text-sm">{t("ftr-talk-desc")}</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center px-12 py-3 items-center text-sm font-semibold shadow-lg">
        <div>
          <p>
            {" "}
            &copy;
            {t("ftr-cprgt")}
          </p>
        </div>
      </div>
    </div>
  );
}

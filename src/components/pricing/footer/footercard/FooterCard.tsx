import logoVlack from "../../../../assets/images/logoVlack.png";
import { useTranslation } from "react-i18next";
export default function FooterCard() {
  const { t } = useTranslation();
  return (
    <div className=" sm:flex flex-col mt-10 hidden ">
      <div className="bg-[#1C1E53] text-white flex flex-col md:flex-row md:jusitfy-center md:px-14 md:pt-14 md:items-start ">
        <div className="flex flex-col gap-6 pt-2 mb-4  text-center justify-between md:text-left md:w-3/6 md:px-4  md:min-h-[230px]">
          <div className="flex flex-col items-center justify-center md:items-start gap-5">
            <div className="flex gap-2">
              <img src={logoVlack} alt="" className="w-8 sm:w-10" />
              <h2 className="text-2xl">{t("ftr-finswt-ttl")}</h2>
            </div>
            <p className="text-sm">{t("ftr-finswt-desc")}</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#FCD980]   text-black lg:flex-row justify-around px-5 py-2 text-sm font-medium">
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
        <div className=" pt-2 flex flex-col gap-6 mb-4 text-center  justify-between md:text-left md:w-3/6 md:min-h-[230px]">
          <div>
            <h1 className=" text-2xl ">{t("ftr-talk-ttl")}</h1>
            <p className="text-sm">{t("ftr-talk-desc")}</p>
          </div>
          <div className="bg-[#FCD980] text-black   ">
            <p className="text-sm px-5 py-2 font-medium">
              Plot No.60, 2nd Floor, Swamy Ayyappa Housing Society, Khanamet,
              Madhapur, Serilingampally, Rangareddy Dist., Telangana - 500081
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-12 py-3 items-center text-sm font-semibold shadow-lg">
        <div>
          <p>
            &copy;
            {t("ftr-cprgt")}
          </p>
        </div>
      </div>
    </div>
  );
}

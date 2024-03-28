import { useTranslation } from "react-i18next";
export default function FooterCard() {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col mt-10">
      <div className=" flex bg-[#1C1E53] text-white px-14 pt-14 items-baseline ">
        <div className="flex flex-col w-3/6 px-8 pt-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl">{t("ftr-finswt-ttl")}</h2>
            <p className="text-sm">{t("ftr-finswt-desc")}</p>
          </div>
          <div className="flex bg-[#FCD980] mt-10 text-black justify-around px-5 py-2 text-sm font-medium">
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
        <div className="w-3/6 px-8 pt-2 flex flex-col gap-4">
          <h1 className="text-2xl">{t("ftr-talk-ttl")}</h1>
          <p className="text-sm">{t("ftr-talk-desc")}</p>

          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 py-3 items-center text-sm font-semibold shadow-lg">
        <div>
          <p>{t("ftr-cprgt")}</p>
        </div>
        <div className={`w-fit overflow-hidden`}>
          <ul className="flex gap-5 ">
            <li>{t("ftr-cprgt-list1")} </li>
            <li>{t("ftr-cprgt-list2")}</li>
            <li>{t("ftr-cprgt-list3")}</li>
            <li>{t("ftr-cprgt-list4")}</li>
            <li>{t("ftr-cprgt-list5")}</li>
            <li>{t("ftr-cprgt-list6")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

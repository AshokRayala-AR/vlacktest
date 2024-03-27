import { TeamData } from "./TeamData";
import { useTranslation } from "react-i18next";

function TeamPage() {
  const { t } = useTranslation();
  return (
    <div className="text-center p-24 md:w-screen md:h-screen justify-center items-center bg-[#f4f6fc]">
      <div className="mb-14">
        <h1 className="font-bold text-3xl mb-4">{t("abt-us-benfits-ttl")}</h1>
      </div>

      <div className="flex flex-col justify-center gap-4 lg:flex lg:justify-center lg:flex-row lg:space-x-8">
        {TeamData.map((item) => (
          <div
            key={item.id}
            className="text-center md:w-1/6 md:h-2/6 flex flex-col items-center bg-white py-6"
          >
            <img
              src={item.img}
              alt={item.personName}
              className="rounded-full h-24 w-24 mb-2"
            />
            <h1 className="text-xl font-semibold mb-1">
              {t(`${item.personName}`)}
            </h1>
            <h4 className="text-sm">{t(`${item.position}`)}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TeamPage;

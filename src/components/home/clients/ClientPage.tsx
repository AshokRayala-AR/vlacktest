import clinet1 from "../../../assets/images/clinet1.png";
import ClientSvg from "../../../assets/svg/ClientSvg.tsx";
import { useTranslation } from "react-i18next";
function ClientPage() {
   const {t} = useTranslation()
  return (
    <div className="flex flex-col gap-8 p-12 lg:flex-row lg:gap-16 lg:p-28">
      <div className="gap-8 lg:w-2/6 flex flex-col justify-center items-center md:flex-row  md:gap-4">
        <h1 className="text-4xl leading-[40px] font-semibold lg:text-4xl  lg:leading-[46px] lg:line-clamp-2">
          {t("h-w-w-clnt-review-ttl")}
        </h1>
        
      </div>

      <div className="flex-row lg:w-4/6 flex flex-col gap-8">
        <div>
          <h1 className="sm: items-center text-2xl leading-[38px] font-medium lg:leading-[48px]">
            {t('h-w-w-clnt-review-desc')}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row justify-between items-end">
          <div className="flex md:flex-row gap-4 justify-center items-center">
            <img
              src={clinet1}
              alt="clientimg"
              className="rounded-full overflow-hidden w-12 h-12 object-center object-cover"
            />
            <div className="flex flex-col">
                    <h1 className="font-normal text-xl ">{ t("h-w-w-clnt-name")}</h1>
              <p className="font-normal text-base">{ t("h-w-w-clnt-occption")}</p>
            </div>
          </div>
          <div>
            <ClientSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;

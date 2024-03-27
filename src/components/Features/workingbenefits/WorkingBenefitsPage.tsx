import WorkingBenefitsMap from "./WokingBenefitsMap";
import { WorkingBenefitsData } from "./WorkingBenefitsData";
import { useTranslation } from "react-i18next";

function WorkingBenefitsPage() {
  const { t } = useTranslation();
    return (
      <div className="flex flex-col justify-center items-center p-10">
        
        <div className="md:flex md:justify-center lg:flex lg:justify-center lg:w-5/6 p-4">
        <WorkingBenefitsMap />
      </div>

      <div className="w-96 text-center align-center mt-8">
          <h1 className="font-bold text-3xl">{ t("abt-us-benfits-ttl")}</h1>
      </div>

      <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4 mt-8 w-5/6 mb-4 '>
        {WorkingBenefitsData.map(item => (
          <div className=' md:text-left p-6 bg-[#f4f6fc]'>
            <div className="flex justify-center mb-4 md:justify-start"><item.svg  /> </div>
            <h1 className='flex justify-center text-xl font-semibold mb-4 md:justify-start'>{item.title}</h1>
            <p className='text-justify mb-4'>{item.content}</p>
          </div>
        ))}
      </div>

    </div>
    )
}

export default WorkingBenefitsPage;
import FeatureCard from "./FeatureCard.tsx";
import { useTranslation } from "react-i18next";
// import z from 'zod';

function FeaturePage() {
    const { t } = useTranslation();
    // const bhargva = z.object({
    //     username: z.string().max(10, { message: "can not be more than 10 letters" }).min(5),
    //     password: z.string().regex(""),
    //     mobile: z.number(),
    //     address: z.string(),
    //     pincode: z.number().max(1000000).min(0),
    //     state: z.string(),
    // });

    // const data = {
    //     username: "",
    //     password: "",
    //     monile: "",
    //     address:"",
    //     pincode : 0,
    //     state:"",
    // }
    // zod resolver

    // bhargva.parse(data);

    return (
        <div className={'bg-[#F4F6FC] flex flex-col justify-center items-center py-20'}>

            <div className="w-96 text-center align-center  ">
                <small className="font-medium">{ t('h-w-w-features-ttl')}</small>
                <p className="font-bold text-3xl">{ t('h-w-w-fetures-hl')}</p>
            </div>


                <FeatureCard />


        </div>
    )
}

export default FeaturePage;

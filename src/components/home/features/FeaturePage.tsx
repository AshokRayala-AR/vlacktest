import FeatureCard from "./FeatureCard.tsx";
import { Data } from "./FeaturesData.tsx";
// import z from 'zod';

function FeaturePage() {
    
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
        <div className={'bg-[#F4F6FC] flex flex-col justify-center items-center '}>

            <div className="w-96 text-center align-center  ">
                <small className="font-medium">Features</small>
                <p className="font-bold text-3xl">Design that solves problems, one product at a time</p>
            </div>


                <FeatureCard />


        </div>
    )
}

export default FeaturePage;

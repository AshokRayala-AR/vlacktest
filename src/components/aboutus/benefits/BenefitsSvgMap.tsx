// import Logo1 from "../../../assets/svg/Logo1";
import { BenefitsSvgData } from "./BenefitsSvgData";

function BenefitsSvgMap () {
    return (
        <div className="flex flex-col justify-center items-center w-full md:flex md:items-center md:justify-center md:flex-row md:space-x-4 md:w-5/6">

            
            
            <div className="flex flex-col gap-6 lg:flex lg:justify-center lg:items-center md:grid md:grid-cols-3   md:flex-row md:items-center md:justify-center md:gap-20 " >
                 <div className="mr-4 mb-6 text-bold md:text-left lg:text-center ">
                 <h1 className="text-3xl font-bold ">100.00+</h1>
                <h5 className="text-l text-bold">Finsweet Users</h5>
                 </div>
                {BenefitsSvgData.map(item => {
                    console.log(item);

                    return (
                        <div key={item.id} className="opacity-75">
                            <item.logo /> 
                         </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BenefitsSvgMap;
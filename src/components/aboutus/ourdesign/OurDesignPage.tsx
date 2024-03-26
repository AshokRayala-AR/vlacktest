import { Data } from "./OurDesignData";
import ourdesign1 from "../../../assets/images/ourdesign1.png";

function OurDesignPage () {
    
    return (
    <div className="flex flex-col md:flex-row md:space-x-36 md:justify-center p-14 space-y-4 ">
        <div className="flex flex-col justify-center gap-6 md:w-2/6 md:text-left md:flex flex-col md:gap-6 ">
            <h5 className="font-bold md:font-semibold ">{Data[0].id}</h5>
            <h1 className="text- text-5xl font-semibold">{Data[0].title}</h1>
            <p className="text-base ">{Data[0].content}</p>
        </div>
        <div className="lg:w-2/6">
            <img src={ourdesign1} className=" md:h-full "/>
        </div>
    </div>
    ) 
}

export default OurDesignPage;
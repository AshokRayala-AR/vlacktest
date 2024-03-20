import { Data } from "./OurMissionData";
import pic3 from "../../../assets/images/pic3.png";
import pic4 from "../../../assets/images/pic4.png";


function OurMissionPage () {
    return (
        <div className="md:flex md:flex-col md:items-center md:justify-center md:h-screen md:w-screen bg-[#eef4fa]">

      <div className="diva md:flex md:h-3/6 justify-center md:gap-24">
        <div className="text-center md:text-left flex flex-col gap-6 justify-center p-4 md:w-2/6">
          <h5 className="font-normal ">{Data[0].label}</h5>
          <h1 className="text-5xl font-semibold">{Data[0].title}</h1>
          <p className="text-base">{Data[0].content}</p>
        </div>
        <div className="cover p-12 no-repeat md:w-2/6 py-10 ">
          <img src={pic3} className="w-full h-[250px] md:max-h-full md:h-full md:w-[500px] object-cover object-center" alt="pic3" />
        </div>
      </div>

      <div className="divb md:flex h-3/6 justify-center md:gap-24">
    <div className="text-center md:text-left flex flex-col gap-6 justify-center p-4 md:w-2/6 md:order-2">
      <h5 className="font-normal ">{Data[1].label}</h5>
      <h1 className="text-5xl font-semibold">{Data[1].title}</h1>
      <p className="text-base">{Data[1].content}</p>
    </div>
    <div className="cover p-12 no-repeat md:w-2/6 py-10 md:order-1">
      <img src={pic4} className="w-full h-[250px] md:max-h-full md:w-[500px] m-auto object-cover object-center" alt="pic4" />
    </div>
  </div>
    </div>

    )
}
export default OurMissionPage;

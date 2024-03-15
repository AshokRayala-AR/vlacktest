import { ClientData } from "./ClientData";
import clinet1 from '../../../assets/images/clinet1.png'
import ClientSvg from "../../../assets/svg/ClientSvg.tsx";

function ClientPage () {
    return(
        <div className="flex flex-col gap-8 p-12 lg:flex-row lg:gap-16 lg:p-28">

           <div className="gap-8 lg:w-2/6 flex flex-col justify-center items-center md:flex flex-col gap-4">
              <h1 className="text-4xl leading-[40px] font-semibold lg:text-4xl font-semibold lg:leading-[46px] lg:line-clamp-2">
                {ClientData[0].title}
              </h1>
              <p className="text-base">
                {ClientData[0].content}
              </p>
           </div>

           <div className="flex-row lg:w-4/6 flex flex-col gap-8">

              <div>
                 <h1 className="sm: items-center text-2xl leading-[38px] font-medium lg:leading-[48px]">
                   " {ClientData[0].review} "
                 </h1>
              </div>

              <div className="flex flex-col items-center gap-4 md:flex-row justify-between items-end">
                <div className="flex md:flex-row gap-4 justify-center items-center">
                   <img src={clinet1} alt="clientimg" className="rounded-full overflow-hidden w-12 h-12 object-center object-cover"/>
                   <div className="flex flex-col">
                   <h1 className="font-normal text-xl ">Jenny Wilson</h1>
                   <p className="font-normal text-base">Vice President</p>
                   </div>
                </div>
                <div>
                   <ClientSvg />
                </div>
              </div>

           </div>

        </div>
    )
}

export default ClientPage;
import { Example } from "./Example";

import Logo from "../../../../assets/images/logoVlack.png";
import NavListComp from "./NavListComp";
export default function NavBarCard() {
  return (
    <div className="w-full">
      <nav className="bg-black text-white text-sm p-0 m-0 w-full flex justify-between items-center py-3 px-2 pr-8 fixed top-0 z-50">
        <div className={`flex items-center`}>
          <img src={Logo} className=" h-[60%] w-16" alt="pic4" />
          <div className={` text-red-500 ml-3 py-3`}>
            <h6 className={`text-4xl`}>Vlack</h6>
            <h6 className={``}>Solutions Pvt Ltd</h6>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="md:hidden">
            <Example />
          </div>
          <div className="hidden md:flex">
            <NavListComp />
          </div>
        </div>
      </nav>
    </div>
  );
}

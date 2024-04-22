import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/images/logoVlack.png";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="bg-black text-white text-sm p-0 m-0 w-full flex justify-between items-center py-3 px-2 pr-8 fixed top-0 z-50">
        <NavLink to="/">
          <div className={`flex items-center`}>
            <div>
              <img src={Logo} className=" w-10 md:w-16 " alt="pic4" />
            </div>
            <div
              className={`flex gap-2 text-red-500 md:ml-3 md:flex-col md:gap-0`}
            >
              <h6 className={`text-xl md:text-4xl`}>Vlack</h6>
              <h6 className={`text-xl md:text-base md:ml-3`}>Solutions</h6>
            </div>
          </div>
        </NavLink>
        <div className="flex justify-center items-center">
          <div className="lg:hidden md:hidden">
            <Example />
          </div>
          <div className="md:hidden"></div>
          <div className="hidden md:flex">
            <NavListComp />
          </div>
        </div>
      </nav>
    </div>
  );
}

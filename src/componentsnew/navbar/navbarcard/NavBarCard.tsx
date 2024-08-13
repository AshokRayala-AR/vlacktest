import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logoVlack.png";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";

export default function Navbar() {
  return (
    <div className="w-screen relative flex justify-center">
      <nav className="shadow-xl backdrop-blur-3xl bg-slate-300 bg-opacity-20 fixed top-8 rounded-full text-white md:w-[90%] w-[100%] text-sm p-0 m-0 flex justify-between items-center py-1 md:px-2 md:pr-8">
        <NavLink to="/">
          <div className="flex items-center">
            <div>
              <img src={Logo} className="w-10 md:w-16" alt="pic4" />
            </div>
            <div className="flex gap-2 md:ml-3 md:flex-col md:gap-0">
              <h6 className="text-xl font-bold md:text-3xl bg-gradient-to-r from-orange-500 to-[#E6C24A] bg-clip-text text-transparent">
                Vlack
              </h6>
            </div>
          </div>
        </NavLink>
        <div className="flex justify-center items-center">
          <div className=" md:hidden">
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

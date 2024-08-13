import PortfolioHeader from "./header/PortfolioHeader";
import { Outlet } from "react-router-dom";

export default function NewPortfolioPage() {
  return (
    <div className="pt-32 px-5 lg:px-24 md:px-14 w-full flex flex-col gap-3 items-center bg-[#080808] text-white">
      <PortfolioHeader />
      <Outlet />
    </div>
  );
}

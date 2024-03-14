import { PortfolioData } from "./PortfolioData";
import PortfolioCard from "./PortfolioCard";
export default function PorfolioCardWrapper() {
  return (
    <div className="flex flex-col w-full gap-4">
      <ul className="flex flex-wrap gap-4  sm:flex-row m-auto sm:gap-8 sm:pt-14 sm:pb-6 ">
        <li>All</li>
        <li>Ui Design</li>
        <li>Webflow Design</li>
        <li>Figma design</li>
      </ul>

      <div className="grid grid-cols-1 gap-y-8 md:gap-x-5 md:gap-y-14 md:grid-cols-2   ">
        {PortfolioData.map((item, index) => {
          return <PortfolioCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

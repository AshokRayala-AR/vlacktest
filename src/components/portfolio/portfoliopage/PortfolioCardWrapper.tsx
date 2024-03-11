import { PortfolioData } from "./PortfolioData";
import PortfolioCard from "./PortfolioCard";
export default function PorfolioCardWrapper() {
  return (
    <div className="flex flex-col ">
      <ul className="flex m-auto gap-8 pt-14 pb-6">
        <li>All</li>
        <li>Ui Design</li>
        <li>Webflow Design</li>
        <li>Figma design</li>
      </ul>

      <div className="grid grid-cols-2 gap-x-5 gap-y-14 ">
        {PortfolioData.map((item,index) => {
          return <PortfolioCard item={item} key={index}/>;
        })}
      </div>
    </div>
  );
}

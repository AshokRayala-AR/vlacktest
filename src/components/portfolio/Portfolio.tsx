import PorfolioCardWrapper from "./portfoliopage/PortfolioCardWrapper";
import PortfolioHeader from "./portfoliopage/PortfolioHeader";

export default function Portfolio() {
  return (
    <div className="p-5 lg:px-24 lg:pt-20 md:px-14 md:pt-10 w-full flex flex-col gap-3 items-center">
      <PortfolioHeader />
      <PorfolioCardWrapper />
    </div>
  );
}

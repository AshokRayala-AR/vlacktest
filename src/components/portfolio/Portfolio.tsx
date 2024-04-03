import PorfolioCardWrapper from "./portfoliopage/PortfolioCardWrapper";
import PortfolioHeader from "./portfoliopage/PortfolioHeader";

export default function Portfolio() {
  return (
    <div className="pt-32 px-5 lg:px-24 md:px-14 w-full flex flex-col gap-3 items-center">
      <PortfolioHeader />
      <PorfolioCardWrapper />
    </div>
  );
}

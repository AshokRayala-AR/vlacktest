import PorfolioCardWrapper from "./portfoliopage/PortfolioCardWrapper";
import PortfolioHeader from "./portfoliopage/PortfolioHeader";

export default function Portfolio() {
  return (
    <div className={`main_head`}>
      <PortfolioHeader />
      <PorfolioCardWrapper />
    </div>
  );
}

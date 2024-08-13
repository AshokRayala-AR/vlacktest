import ServicesPage from "./services/ServicesPage";
import Welcomec from "./welcome/Welcome";

import IndustriesComp from "./industries/IndustriesComp";

import HowWeWorkPage from "./howwework/HowWeWorkPage";
import SendInquiryPage from "./inquiry/SendInquirypage";
import WelcomePage from "./newwelcome/WelcomePage";

export default function NewHome() {
  return (
    <div className="main_head bg-[#080808] min-w-screen max-w-screen">
      <Welcomec />
      <HowWeWorkPage />
      <ServicesPage />
      <IndustriesComp />
      <WelcomePage />
      <SendInquiryPage />
    </div>
  );
}

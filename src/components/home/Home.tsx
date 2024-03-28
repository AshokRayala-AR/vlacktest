import HowWeWorkPage from "./howwework/HowWeWorkPage.tsx";

import FeaturePage from "./features/FeaturePage.tsx";
import Faq from "../pricing/faq/Faq.tsx";
import SendInquiryPage from "./inquiry/SendInquirypage.tsx";
import WelcomePage from "./welcome/WelcomePage.tsx";

const Home = () => {
  return (
    <div className={`main_head`}>
      <WelcomePage />
      <HowWeWorkPage />
      <FeaturePage />
      <SendInquiryPage />
      <Faq />
    </div>
  );
};
export default Home;

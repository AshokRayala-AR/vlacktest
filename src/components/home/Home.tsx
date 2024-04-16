import HowWeWorkPage from "./howwework/HowWeWorkPage.tsx";

import FeaturePage from "./features/FeaturePage.tsx";
import Faq from "../pricing/faq/Faq.tsx";
import SendInquiryPage from "./inquiry/SendInquirypage.tsx";
import WelcomePage from "./welcome/WelcomePage.tsx";
import VideoPlayer from "../audio/VideoPlayer.tsx";

const Home = () => {
  return (
    <div className={`main_head`}>
      <WelcomePage />
      <VideoPlayer src={""} />
      <HowWeWorkPage />
      <FeaturePage />
      <SendInquiryPage />
      <Faq />
    </div>
  );
};
export default Home;

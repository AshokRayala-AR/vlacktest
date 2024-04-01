import WhoWeArePage from "./whoweare/WhoWeArePage";
import ProcessPage from "./processfollow/ProcessPage";
import OurMissionPage from "./ourmission/OurMissionPage";
import BenefitsPage from "./benefits/BenefitsPage";

import OurDesignPage from "./ourdesign/OurDesignPage";

function Aboutus() {
  return (
    <div className={`main_head overflow-hidden`}>
      <OurDesignPage />
      <WhoWeArePage />
      <ProcessPage />
      <OurMissionPage />
      <BenefitsPage />
    </div>
  );
}
export default Aboutus;

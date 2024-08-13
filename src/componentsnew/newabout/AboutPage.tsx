import BenefitsPage from "./benefits/BenefitsPage";
import SlidesComp from "./multislidebg/SlideComp";
import OurMissionPage from "./ourmission/OurMissionPage";
import ThankYouComp from "./ourteam/OurTeam";
import TechStackPage from "./techstack/TechStackPage";
import VlackIntro from "./vlackintro/VlackIntro";

export default function AboutPage() {
  return (
    <div className="main_head bg-[#080808]">
      <VlackIntro/>
      <SlidesComp />
      <BenefitsPage />
      <OurMissionPage />
      <TechStackPage />
      <ThankYouComp />
    </div>
  );
}

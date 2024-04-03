import ClientPage from "./client/ClientPage";
import BenefitsPage from "../aboutus/benefits/BenefitsPage";

function Features() {
  return (
    <div className={`main_head overflow-hidden`}>
      <BenefitsPage/>
      <ClientPage />
    </div>
  );
}

export default Features;

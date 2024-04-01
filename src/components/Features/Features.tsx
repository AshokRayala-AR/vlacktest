import ClientPage from "./client/ClientPage";
import WorkingBenefitsPage from "./workingbenefits/WorkingBenefitsPage";

function Features() {
  return (
    <div className={`main_head overflow-hidden`}>
      <WorkingBenefitsPage />
      <ClientPage />
    </div>
  );
}

export default Features;

import ClientPage from "./client/ClientPage";
import WorkingBenefitsPage from "./workingbenefits/WorkingBenefitsPage";

function Features() {
  return (
    <div className={`main_head`}>
      <WorkingBenefitsPage />
      <ClientPage />
    </div>
  );
}

export default Features;

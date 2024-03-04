import "./App.css";

import Navbar from "./components/navbar/Navbar";
import HomeComp from "./components/homecomp/HomeComp";
import ProjectsComp from "./components/projectscomp/ProjectsComp";
import Footer from "./components/footer/FooterComp";
import PricingComp from './components/pricing/PricingComp'

function App() {
  return (
    <div className={`mt-6 base_button`}>
      <Navbar />
      <HomeComp />
      <ProjectsComp />
      <PricingComp />
      <Footer />
    </div>
  );
}

export default App;

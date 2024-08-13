import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./componentsnew/newcontactus/ContactUsPage";
import NewPortfolioPage from "./componentsnew/newportfolio/NewPortfolioPage";
import NavBar from "./componentsnew/navbar/NavBar";
import ScrollToTop from "./ScrollToTop";
import NewHome from "./componentsnew/newhome/NewHome";
import FooterComp from "./componentsnew/footer/FooterComp";
import AboutPage from "./componentsnew/newabout/AboutPage";
import NewFeaturePage from "./componentsnew/newfeatures/NewFeaturePage";
import UiPage from "./componentsnew/newportfolio/ui/UiPage";
import AllPage from "./componentsnew/newportfolio/all/AllPage";
import FigmaPage from "./componentsnew/newportfolio/figma/FigmaPage";
import NavServicesComp from "./componentsnew/navservices/NavServicesComp";
import NavIndustriesComp from "./componentsnew/navindustries/NavIndustriesComp";
import IndustriesComp from "./componentsnew/newhome/industries/IndustriesComp";
import ServicesPage from "./componentsnew/newhome/services/ServicesPage";
import WhatsappComp from "./componentsnew/whatsappnew/WhatsappComp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path={"/"} element={<NewHome />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/feature"} element={<NewFeaturePage />} />
        <Route path="/portfolio" element={<NewPortfolioPage />}>
          <Route index element={<AllPage />} />
          <Route path="all" element={<AllPage />} />
          <Route path="ui" element={<UiPage />} />
          <Route path="figma" element={<FigmaPage />} />
        </Route>
        <Route path={"/contact"} element={<ContactUsPage />} />
        <Route path={"/services"} element={<ServicesPage />} />
        <Route path={"/industries"} element={<IndustriesComp />} />
        <Route path="/services/:serviceName" element={<NavServicesComp />} />
        <Route
          path="/industries/:industryName"
          element={<NavIndustriesComp />}
        />
      </Routes>
      <FooterComp />
      <WhatsappComp />
    </BrowserRouter>
  );
}

export default App;

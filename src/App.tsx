import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Design from './components/designcasestudies/DesignCase'
import ContactUs from "./components/contactus/ContactUs";
import Policy from "./components/policy/policy";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Features from "./components/Features/Features";
import Readblog from "./components/readblog/Readblog";
import Footer from "./components/pricing/footer/Footer";
import NavBar from "./components/pricing/navbar/NavBar";
import Home from "./components/home/Home";
import ScrollToTop from "./ScrollToTop";
import WhatsAppImage from "./components/whatsapp/WhatsAppImage";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/design"} element={<Design />} />
        <Route path={"/contact"} element={<ContactUs />} />
        <Route path={"/policy"} element={<Policy />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"/feature"} element={<Features />} />
        <Route path={"/readblog"} element={<Readblog />} />
        <Route path={"/about"} element={<Aboutus />} />
      </Routes>
      <WhatsAppImage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

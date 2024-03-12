
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus.tsx";
import Blog from "./components/blog/Blog.tsx";
import ContactUs from "./components/contactus/ContactUs.tsx";
import Policy from "./components/policy/policy.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Pricing from "./components/pricing/Pricing.tsx";
import Features from "./components/Features/Features.tsx";
import Readblog from "./components/readblog/Readblog.tsx";
import Footer from "./components/pricing/footer/Footer.tsx";
import NavBar from "./components/pricing/navbar/NavBar.tsx";
import Home from "./components/home/Home.tsx";

function App() {
  return (
<BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Blogs'} element={<Blog/>}/>
        <Route path={'/Contact'} element={<ContactUs/>}/>
        <Route path={'/policy'} element={<Policy/>}/>
        <Route path={'/portfolio'} element={<Portfolio/>}/>
        <Route path={'/pricing'} element={<Pricing/>}/>
        <Route path={'/feature'} element={<Features/>}/>
        <Route path={'/ReadBlog'} element={<Readblog/>}/>
        <Route path={'/about'} element={<Aboutus/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;

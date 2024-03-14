import HowWeWorkPage from "./howwework/HowWeWorkPage.tsx";
// import Features from "../Features/Features.tsx";
import Faq from "../pricing/faq/Faq.tsx";
import WelcomePage from "./welcome/WelcomePage.tsx";
import ViewProjects from "./viewprojects/ViewProjects.tsx";
// import BlogCard from "../blog/blogpage/BlogCards.tsx";
import HomeBlog from "./homeblog/HomeBlog.tsx";

const Home = () => {
  return (
    <>
      <WelcomePage />
      <div className="">
        <HowWeWorkPage />
      </div>
      <div className="p-5 lg:px-24 lg:pt-20 md:px-14 md:pt-10 ">
        <ViewProjects />
      </div>
      <div className="p-5 lg:px-24 lg:pt-20 md:px-14 md:pt-10">
        <Faq />
      </div>
      <div className="p-5 lg:px-24 lg:pt-20 md:px-14 md:pt-10">
        <HomeBlog />
      </div>
    </>
  );
};
export default Home;

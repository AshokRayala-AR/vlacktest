import HowWeWorkPage from "./howwework/HowWeWorkPage.tsx";
import FeaturePage from "./features/FeaturePage.tsx";
import Faq from "../pricing/faq/Faq.tsx";
import ClientPage from "./clients/ClientPage.tsx";
import SendInquiryPage from "./inquiry/SendInquirypage.tsx";


const Home =()=>{
    return(
        <div >
            <HowWeWorkPage/>
            <FeaturePage/>
            <ClientPage />
            <SendInquiryPage />
            <Faq/>
        </div>
    )

}
export default Home;

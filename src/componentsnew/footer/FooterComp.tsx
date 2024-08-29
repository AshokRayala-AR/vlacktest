import footerListData from "./FooterListData";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logoVlack.png";
import ContactUs from "../../assets/images/vlack-contact.png";
import Oscillate from "../../assets/images/oscillate.svg";

export default function FooterComp() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col p-4 xl:px-32 bg-[#080808] text-white gap-4 border-t-2 border-slate-900"
      style={{
        backgroundImage: `url(${Oscillate})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-4 mx-auto gap-8 lg:flex-row lg:justify-between lg:w-full">
        {footerListData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-1">
            <li className="text-xl mb-1 font-bold">{t(section.listTitle)}</li>
            {section.dscrpt.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm text-slate-400 leading-6">
                {t(item.desc)}
              </li>
            ))}
          </div>
        ))}
      </ul>
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-2">
        <div className="md:w-2/6 flex flex-col gap-2">
          <div className="flex items-center">
            <div>
              <img src={Logo} className="w-10 md:w-16" alt="Vlack Logo" />
            </div>
            <div className="flex items-center gap-2 text-red-500 md:ml-3 md:flex-col md:gap-0">
              <h6 className="text-xl font-bold md:text-3xl bg-gradient-to-r from-orange-500 to-[#E6C24A] bg-clip-text text-transparent">
                Vlack
              </h6>
              <h6 className="text-sm font-bold md:text-md bg-gradient-to-r from-orange-500 to-[#E6C24A] bg-clip-text text-transparent">
                Software Solutions
              </h6>
            </div>
          </div>
          <p className="text-slate-500 px-8">
            1st Floor, Plot No: 60, Ayyappa Society Colony, Madhapur, Hyderabad
            – 500081 Telangana, India.
          </p>
        </div>
        <div className="md:w-3/6">
          <img
            className="w-full"
            src={ContactUs}
            alt="Contact Us for your website or product marketing"
          />
        </div>
        <div className="md:w-1/4">
          <ul className="flex flex-col gap-1">
            <li className="text-xl mb-1 font-bold">{t("mobl-ftr-contact")}</li>
            <li className="text-lg font-medium">For General Enquiry</li>
            <li className="text-slate-400">Email: hr@vlacksolutions.com</li>
            <li className="text-slate-400">Phone: +91 9392245979</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

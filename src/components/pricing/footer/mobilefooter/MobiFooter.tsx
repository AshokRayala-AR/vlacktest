import logoVlack from "../../../../assets/images/logoVlack.png";
import { useTranslation } from "react-i18next";
export default function MobiFooter() {
  const { t } = useTranslation();
  return (
    <div className="border-t border-white text-white bg-[#1C1E53] text-sm flex flex-col gap-3 py-5 px-4 sm:hidden">
      <div className="flex text-red-500 justify-center items-center">
        <img src={logoVlack} alt="" className="w-8 h-8" />
        <h2 className="text-2xl">{t("ftr-finswt-ttl")}</h2>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Reach Us</h1>
          <div>
            <img src="" alt="" />
            <p>+91 9392245979</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>contact@vlacksolutions.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Blogs</p>
        </div>
      </div>
      <div className="mb-4">
        <img src="" alt="" />
        <p className="w-4/6">
          Plot No.60, 2nd Floor, Swamy Ayyappa Housing Society, Khanamet,
          Madhapur, Serilingampally, Rangareddy Dist., Telangana - 500081
        </p>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 h-[200px]">
          <h1 className="text-lg font-semibold">Legal</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms & Services</h1>
          <h1>Terms of Use</h1>
          <h1>Refund Policy</h1>
          <h1>Follow Us</h1>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        {/* <div>
          <ul className="flex flex-col gap-3">
            <>
              <li className="text-lg font-semibold">QuickLinks</li>
              <ul className="flex flex-col gap-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">AboutUs</NavLink>
                <NavLink to="/feature">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">ContactUs</NavLink>
              </ul>
            </>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default function FooterCard() {
  return (
    <div className=" flex flex-col mt-10">
      <div className=" flex bg-[#1C1E53] text-white px-14 pt-14 items-baseline ">
        <div className="flex flex-col w-3/6 px-8 pt-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl">Vlack Solutions</h2>
            <p className="text-sm">
              we are always open to discuss projects and improve your online
              presence
            </p>
          </div>
          <div className="flex bg-[#FCD980] mt-10 text-black justify-around px-5 py-2 text-sm font-medium">
            <div>
              <p>Email me at</p>
              <p>contact@vlacksolutions.com</p>
            </div>
            <div>
              <p>Call Us</p>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>
        <div className="w-3/6 px-8 pt-2 flex flex-col gap-4">
          <h1 className="text-2xl">Let's Talk!</h1>
          <p className="text-sm">
            we are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges
          </p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 py-3 items-center text-sm font-semibold shadow-lg">
        <div>
          <p>Copyright 2021, vlacksolutions.com</p>
        </div>
        <div>
          <ul className="flex gap-5 ">
            <li>Home </li>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

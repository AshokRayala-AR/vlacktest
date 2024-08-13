import  { useRef } from "react";
import wp from "../../assets/images/wp.png";
import logovlack from "../../assets/images/logoVlack.png";
import wpbg from "../../assets/images/wpbg.png";

function WhatsappComp() {
  const screenRef = useRef<HTMLDivElement>(null);

  const toggleScreen = () => {
    console.log(screenRef.current);
    if (screenRef.current) {
      screenRef.current.style.display =
        screenRef.current.style.display === "none" ? "block" : "none";
    }
  };

  const closeScreen = () => {
    if (screenRef.current) {
      screenRef.current.style.display = "none";
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919392245979", "_blank");
  };

  return (
    <div className="relative">
      <button
        className="w-16 h-16 bg-[#f87005] rounded-full p-2 fixed bottom-0 right-0"
        onClick={toggleScreen}
      >
        <img src={wp} alt="wp" />
      </button>

      <div
        ref={screenRef}
        className="w-[22%] h-[400px] sm:min-w-[320px] rounded-2xl shadow-2xl fixed bottom-20 right-2 bg-white"
        style={{ display: "block" }} 
      >
        <button
          className="absolute right-2 rounded-full w-6 h-6 text-red-500 bg-white flex items-center justify-center"
          onClick={closeScreen}
        >
          &times;
        </button>
        <div className="h-1/6 bg-[#128483] flex justify-start items-center gap-2 rounded-t-2xl px-2">
          <div className="w-14 h-14 relative bg-white rounded-full flex justify-center items-center">
            <img
              src={logovlack}
              alt="logovlack"
              className="w-12 h-12 mr-2 object-contain"
            />
            <div className="absolute bottom-1 right-0 w-3 h-3 rounded-full bg-[#24d464]"></div>
          </div>
          <div className="flex flex-col justify-start items-start text-white">
            <p className="font-medium text-lg">Vlack Solutions</p>
            <p className="font-normal text-sm">
              Typically replies within minutes
            </p>
          </div>
        </div>

        <div
          className="h-4/6 p-2"
          style={{
            backgroundImage: `url(${wpbg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-5/6 p-4 bg-[#DCF8C6] rounded-lg shadow-md">
            <p className="text-sm text-gray-800">
              Hi there! Welcome to Vlack Solutions. How can we assist you today?
            </p>
          </div>
        </div>

        <div className="h-1/6 w-full flex justify-center items-center p-2">
          <button onClick={handleWhatsAppClick} className="bg-[#24d464] w-3/6 flex justify-around items-center gap-2 text-white p-2 px-4 rounded-full">
            <img src={wp} alt="wp" className="w-4 h-4" />
            <p className="font-semibold">Contact Us</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatsappComp;
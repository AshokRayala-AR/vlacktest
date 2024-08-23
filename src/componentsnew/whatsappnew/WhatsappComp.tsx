// import  { useRef } from "react";
// import wp from "../../assets/images/wp.png";
// import logovlack from "../../assets/images/logoVlack.png";
// import wpbg from "../../assets/images/wpbg.png";

// function WhatsappComp() {
//   const screenRef = useRef<HTMLDivElement>(null);

//   const toggleScreen = () => {
//     console.log(screenRef.current);
//     if (screenRef.current) {
//       screenRef.current.style.display =
//         screenRef.current.style.display === "none" ? "block" : "none";
//     }
//   };

//   const closeScreen = () => {
//     if (screenRef.current) {
//       screenRef.current.style.display = "none";
//     }
//   };

//   const handleWhatsAppClick = () => {
//     window.open("https://api.whatsapp.com/send?phone=919392245979", "_blank");
//   };

//   return (
//     <div className="relative">
//       <button
//         className="w-16 h-16  rounded-full p-1 fixed bottom-2 right-1"
//         onClick={toggleScreen}
//       >
//         <img src={wp} alt="wp" />
//       </button>

//       <div
//         ref={screenRef}
//         className="w-[22%] h-[400px] sm:min-w-[320px] min-w-[280px] rounded-2xl shadow-2xl fixed bottom-20 right-2 bg-slate-100"
//         style={{ display: "none" }} 
//       >
//         <button
//           className="absolute right-2 top-5 rounded-full w-5 h-5 text-red-500 bg-white text-center flex items-end justify-center"
//           onClick={closeScreen}
//         >
//          <span className="">&times;</span> 
//         </button>
//         <div className="h-1/6 bg-slate-100 text-black flex justify-start items-center gap-2 rounded-t-2xl px-2">
//           <div className="w-12 h-12 relative bg-[#141414] rounded-full flex justify-center items-center">
//             <img
//               src={logovlack}
//               alt="logovlack"
//               className="w-10 h-10 mr-2 object-contain"
//             />
//             <div className="absolute bottom-1 right-0 w-3 h-3 rounded-full bg-[#24d464]"></div>
//           </div>
//           <div className="flex flex-col justify-start items-start text-black">
//             <p className="font-medium text-md">Vlack Solutions</p>
//             <p className=" text-[12px]">
//               Typically replies within minutes
//             </p>
//           </div>
//         </div>

//         <div
//           className="h-4/6 p-2"
//           style={{
//             backgroundImage: `url(${wpbg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "bottom",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="relative w-5/6 p-4 bg-[#DCF8C6] rounded-lg shadow-md">
//             <p className="text-[14px] text-gray-800">
//               Hi there! Welcome to Vlack Solutions. How can we assist you today?
//             </p>
//           </div>
//         </div>

//         <div className="h-1/6 w-full flex justify-center items-center p-2">
//           <button onClick={handleWhatsAppClick} className="bg-[#24d464] w-4/6 flex justify-center items-center gap-3 text-white p-2 px-4 rounded-full">
//             <img src={wp} alt="wp" className="w-4 h-4" />
//             <p className="font-semibold">Contact Us</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatsappComp;

import { useRef, useState, useEffect } from "react";
import wp from "../../assets/images/wp.png";
import logovlack from "../../assets/images/logoVlack.png";
import wpbg from "../../assets/images/wpbg.png";

function WhatsappComp() {
  const screenRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the modal
  const toggleScreen = () => {
    setIsVisible(prev => !prev);
  };

  // Close the modal
  const closeScreen = () => {
    setIsVisible(false);
  };

  // Open the modal initially and close it after 1 second
  useEffect(() => {
    setIsVisible(true); // Open initially
    const timer = setTimeout(() => {
      setIsVisible(false); // Close after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Open WhatsApp chat
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919392245979", "_blank");
  };

  return (
    <div className="relative">
      <button
        className="w-16 h-16 rounded-full p-1 fixed bottom-2 right-1"
        onClick={toggleScreen}
      >
        <img src={wp} alt="wp" />
      </button>

      <div
        ref={screenRef}
        className={`w-[22%] h-[400px] sm:min-w-[320px] min-w-[280px] rounded-2xl shadow-2xl fixed bottom-20 right-2 bg-slate-100 ${isVisible ? 'block' : 'hidden'}`}
      >
        <button
          className="absolute right-2 top-5 rounded-full w-5 h-5 text-red-500 bg-white text-center flex items-end justify-center"
          onClick={closeScreen}
        >
          <span className="">&times;</span>
        </button>
        <div className="h-1/6 bg-slate-100 text-black flex justify-start items-center gap-2 rounded-t-2xl px-2">
          <div className="w-12 h-12 relative bg-[#141414] rounded-full flex justify-center items-center">
            <img
              src={logovlack}
              alt="logovlack"
              className="w-10 h-10 mr-2 object-contain"
            />
            <div className="absolute bottom-1 right-0 w-3 h-3 rounded-full bg-[#24d464]"></div>
          </div>
          <div className="flex flex-col justify-start items-start text-black">
            <p className="font-medium text-md">Vlack Solutions</p>
            <p className="text-[12px]">Typically replies within minutes</p>
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
            <p className="text-[14px] text-gray-800">
              Hi there! Welcome to Vlack Solutions. How can we assist you today?
            </p>
          </div>
        </div>

        <div className="h-1/6 w-full flex justify-center items-center p-2">
          <button onClick={handleWhatsAppClick} className="bg-[#24d464] w-4/6 flex justify-center items-center gap-3 text-white p-2 px-4 rounded-full">
            <img src={wp} alt="wp" className="w-4 h-4" />
            <p className="font-semibold">Contact Us</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatsappComp;

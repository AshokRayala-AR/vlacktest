import WhatsAppImg from "../../assets/images/whatsapp-img.png";
const WhatsAppImage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919392245979", "_blank");
  };

  return (
    <div className="fixed bottom-2 right-2 cursor-pointer z-50"

      onClick={handleWhatsAppClick}
    >
      <img
        src={WhatsAppImg}
        alt="WhatsApp"
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default WhatsAppImage;

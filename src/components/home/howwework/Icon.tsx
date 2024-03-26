export default function Icon({ item }) {
  return (
    <div className="w-12 h-12 bg-[#3114f4] rounded-[12px] relative overflow-hidden border-none">
      <div className="bg-[#5239fa] rounded-xl w-14 h-14 absolute left-2 bottom-2 z-10 border-none">
        <span className="absolute bottom-1 left-2 text-lg text-white font-medium border-none">
          {item.id}
        </span>
      </div>
      <div className="bg-[#fcd980] rounded-xl w-14 h-14 absolute top-6 right-6 border-none"></div>
    </div>
  );
}

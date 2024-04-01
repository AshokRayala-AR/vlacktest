import { IconPropType } from "../../../utils/types/Types.ts";

export default function Icon({ item }: IconPropType) {
  return (
    <div className="w-8 h-8 md:w-12 md:h-12 bg-[#3114f4] rounded-[12px] relative overflow-hidden border-none">
      <div className="bg-[#5239fa] rounded-xl w-8 h-8 absolute left-1 bottom-1 md:left-2 md:bottom-2 z-10 border-none md:w-12 md:h-12">
        <span className="text-sm absolute bottom-0 left-1 md:bottom-2 md:left-2 md:text-lg text-white font-medium border-none">
          {item.id}
        </span>
      </div>
      <div className="bg-[#fcd980] rounded-xl w-8 h-8 absolute top-4 right-4 md:top-6 md:right-6 border-none md:w-12 md:h-12"></div>
    </div>
  );
}

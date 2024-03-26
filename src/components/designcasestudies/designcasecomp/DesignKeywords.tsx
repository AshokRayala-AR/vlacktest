import { KeywordsData } from "./ProjectData";
export default function DesignKeywords() {
  return (
    <div className="pb-6 md:pb-14 lg:pb-20">
      <div className="flex flex-col gap-2 items-center md:flex-row md:justify-start md:items-baseline border-t-[1px] border-b-[1px] py-3 ">
        <div className="flex flex-col gap-2 items-start md:flex-row md:items-end md:justify-between md:w-6/6 lg:w-5/6">
          <span className="text-xl text-[#2405F2]">Keywords</span>
          <ul className="flex flex-col gap-2 md:gap-6 md:flex-row md:justify-around   ">
            {KeywordsData.map((item, index) => {
              return (
                <li className="" key={index}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

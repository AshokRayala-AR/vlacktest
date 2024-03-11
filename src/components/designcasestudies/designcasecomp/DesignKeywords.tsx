import { KeywordsData } from "./ProjectData";
export default function DesignKeywords() {
  return (
    <div className="pb-20">
      <div className="flex justify-start items-baseline border-t-[1px] border-b-[1px] py-3 ">
        <span className="text-xl text-[#2405F2]">Keywords</span>
        <ul className="flex justify-around w-5/6  ">
          {KeywordsData.map((item,index) => {
            return <li className="" key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

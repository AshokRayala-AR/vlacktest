import { data } from "./HowWeWorkData.tsx";
import Icon from "./Icon.tsx";
export default function HowWeWorkPage() {
  return (
    <div className=" flex justify-center items-center bg-[#F4F6FC] border border-green-500 p-5  lg:pt-20 md:px-14 md:pt-10">
      <div className=" md:flex justify-center items-start md:gap-8 ">
        <div className="flex flex-col items-center w-full text-center md:flex md:items-start md:w-2/6 md:text-left ">
          <h1 className="font-bold text-3xl p-2">how we work</h1>
          <p className="p-2 w-4/6  md:w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            exercitationem laboriosam corporis nemo fugiat autem?
          </p>
          <a href="#" className=" text-customblue p-2 ">
            get in touch with us &#8594;
          </a>
        </div>
        <div className="p-5 gap-y-4 grid grid-cols-1 md:w-3/6 md:px-0 sm:grid-cols-2 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-center md:text-left shadow-sm rounded-md p-5"
            >
              <Icon item={item} />
              <h2 className="text-2xl font-medium p-2">{item.title}</h2>
              <p className="text-balance p-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// export default HowWeWorkPage;

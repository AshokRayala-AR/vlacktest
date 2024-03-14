import { HomeBlogData } from "./HomeBlogData";
export default function HomeBlog() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HomeBlogData.map((item, index) => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={index}>
              <img src={item.img} alt="" />
              <p className="text-sm">{item.date}</p>
              <h1 className="text-lg font-semibold">{item.headline}</h1>
              <p className="text-sm">{item.description}</p>
              <a className="font-medium" href="">
                { `${item.readmore} \u2192`}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

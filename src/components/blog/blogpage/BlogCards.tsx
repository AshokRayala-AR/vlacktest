import { BlogCardData } from "./BlogData";
export default function BlogCard() {
  return (
    <div className="py-8 ">
      <h1 className="text-3xl font-semibold text-center pb-6">Our Blog</h1>
      <div className="grid grid-cols-3 gap-4">
        {BlogCardData.map((item,index) => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={index}>
              <img src={item.img} alt="" />
              <p className="text-sm">{item.date}</p>
              <h1 className="text-lg font-semibold">{item.headline}</h1>
              <p className="text-sm">{item.description}</p>
              <a className="font-medium" href="">
                {item.readmore}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

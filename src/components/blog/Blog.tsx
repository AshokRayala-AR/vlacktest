import BlogHeader from "./blogpage/BlogHeadComp";
import BlogCard from "./blogpage/BlogCards";
export default function Blog() {
  return (
    <div className="p-5 w-full lg:px-24">
      <BlogHeader />
      <BlogCard />
    </div>
  );
}

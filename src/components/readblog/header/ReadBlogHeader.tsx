import readblog1 from "../../../assets/images/readblog1.jpeg";

function ReadBlogHeader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-8">
      <div className=" justify-center text-center md:w-4/6 ">
        <h1 className="text-4xl font-bold mb-4">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <h5 className="text-lg">Andrew Johnson Posted on 27th January 2021</h5>
      </div>

      <div className="">
        <img
          src={readblog1}
          className="w-screen md:h-[477px] h-[200px] object-cover mx-auto"
          alt="Blog header"
        />
      </div>
    </div>
  );
}
export default ReadBlogHeader;

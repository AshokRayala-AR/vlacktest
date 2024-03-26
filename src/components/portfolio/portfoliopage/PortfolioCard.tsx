export default function PortfolioCard({ item }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className=" ">
        <img
          className="w-screen border-x-[39px] border-y-[30px] md:w-[545px] h-[317px]  object-contain object-center"
          style={{
            borderImage: `${item.border}`,
          }}
          src={item.img}
          alt="some"
        />
      </div>
      <div className="flex flex-col items-start md:gap-y-5 gap-y-2">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-sm">{item.description}</p>

        <a className="text-sm font-medium" href="">
          {item.view}
        </a>
      </div>
    </div>
  );
}

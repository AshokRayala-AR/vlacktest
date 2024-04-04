export default function DesignCaseCard() {
  return (
    <div className="pt-14">
      <div className="flex justify-center w-full md:w-4/6 items-center mx-auto">
        <img
          className="border-x-[40px] border-y-[68px] "
          style={{
            borderImage:
              "linear-gradient(131deg, #F4EDE1 16.74%, #98B1C6 103.17%) 1",
          }}
          src="src/assets/images/designcasecard.jpg"
          alt="design"
        />
      </div>
    </div>
  );
}

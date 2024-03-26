export default function BlogHeader() {
  return (
    <div className="flex flex-col text-center gap-6 w-full">
      <h1 className="text-3xl font-semibold">
        A UX Case Study on Creating a Studious Environment for Students
      </h1>
      <p className="text-sm">Andrew Jonson Posted on 27th January 2021</p>
      <img
        src="src/assets/images/bloghead.jpg "
        className="h-[300px] object-cover"
        alt=""
      />
      <p>
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>
      <p className="text-sm text-[#2405F2]">Read more</p>
    </div>
  );
}

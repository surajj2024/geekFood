import back from "../assets/bg.jpg";
export default function HeroSection() {
  return (
    <div
      className="h-[91vh] mb-20  "
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[91vh] bg-black/50 mb-20 md:mb-0 flex items-center ">
        <div className="lg:pt-24  max-w-7xl py-10 flex flex-col lg:items-star   justify-center text-center lg:w-1/2   items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide font-semibold">
            Let us find your <br />
            <span className=" bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent font-bold">
              favorite food !
            </span>
          </h1>
          <p className="mt-10 text-lg text-center max-w-4xl px-10 text-neutral-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex flex-col lg:flex-row  items-center justify-center text-center mt-14 gap-10 lg:w-1/2 ">
            <a
              href="#"
              className="py-2 w-full px-3 rounded-md  bg-gradient-to-r from-orange-500 to-orange-700"
            >
              Search Now
            </a>
            <a
              href="#"
              className="py-2 px-3  w-full rounded-md  bg-white text-red-800"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

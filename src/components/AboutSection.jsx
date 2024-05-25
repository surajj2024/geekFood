import AboutImg from "../assets/aboutImg.jpg";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  mb-10 gap-10 justify-center items-center">
        <div className=" lg:w-1/2 w-full overflow-hidden rounded-md  ">
          <img src={AboutImg} className=" hover:scale-105 ease-in-out duration-300" alt="House Image" />
        </div>
        <div className="lg:w-1/2 w-full lg:justify-center  flex flex-col   ">
          <h2 className="text-3xl lg:4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p className="mt-10 text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <div className="mt-10">
            <Link 
              to="/"
              className="bg-blue-500 px-3 py-2  rounded-md hover:bg-blue-700 "
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

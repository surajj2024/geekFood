import { qoute } from "../constants";

export default function Qoute() {
  return (
    <>
      <ul className=" p-4  w-[95%] md:w-[75%] lg:w-[70%] rounded-md mx-auto">
        {qoute.map((q, index) => (
          <li
            key={index}
            className="px-5 py-10 my-10 flex justify-center items-center flex-col w-full rounded-md bg-neutral-800/50   text-gray-100"
          >
            <h2 className="font-SemiBold text-xl md:text-2xl lg:text-3xl ">
              {q.title}
            </h2>
            <p className="text-center italic text-neutral-300 mt-5">
              {q.author}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

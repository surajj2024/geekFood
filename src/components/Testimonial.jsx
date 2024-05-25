import { testimonial } from "../constants";

export default function Testimonial() {
  return (
    <>
      <div className="flex flex-wrap  justify-center pb-10 mt-20">
        {testimonial.map((testimo, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 lg:px-4 p-2">
            <div className=" bg-neutral-900 rounded-md p-6 text-md border gap-3 border-neutral-800 font-thin">
              <p> {testimo.text}</p>
            </div>
            <div className="flex item-start mt-4  px-4">
              <img
                src={testimo.userImg}
                alt=""
                className="w-12 h-12 mr-6 rounded-full border border-neutral-700"
              />
              <div>
                <h6 className="font-bold">{testimo.userName}</h6>
                <p className="text-xs italic font-normal">
                  {testimo.userTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

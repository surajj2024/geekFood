import React from "react";

export default function FoodCard({item,onClick}) {
  return (
    <div key={item.id}  onClick={onClick} className="bg-white cursor-pointer border text-center rounded-md">
      <div className="overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className="ease-in-out duration-300 hover:scale-110 object-cover h-full w-full"
        />
      </div>
      <h2 className="text-2xl my-1 font-bold mb-2 text-black">{item.title}</h2>
    </div>
  );
}

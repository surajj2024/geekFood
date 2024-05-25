import React, { useEffect, useState, useMemo, useCallback, memo } from "react";
import axios from "axios";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://halal-korean-restaurants-api.p.rapidapi.com/restaurants",
        headers: {
          "X-RapidAPI-Key": "6465dd854fmsh045123ea0fe383cp171999jsn5385b234c4a0",
          "X-RapidAPI-Host": "halal-korean-restaurants-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios(options);
        setData(response.data[0]?.restaurant);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.restaurantname.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  }, [data, inputValue]);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <input
        type="text"
        className="my-10 text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 rounded-md px-4 py-2"
        placeholder="Enter text..."
        value={inputValue}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredData &&
          filteredData.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-6 ">
              <span className="h-[300px]">
                {" "}
                <img
                  src={item.main_image}
                  alt={item.image_alt} // Corrected alt attribute
                  className="w-full  h-[150px] mb-4 object-cover  rounded-md"
                />
              </span>
              <h1 className="text-2xl font-bold mb-2 text-black">
                {item.restaurantname}
              </h1>

              <span className="flex justify-between">
                {" "}
                <span className="text-gray-600 mb-2 font-bold">
                  Rating: {item.rating}
                </span>
                <span className="text-gray-600 mb-2">Price: {item.price}</span>
              </span>
              <p className="text-gray-600 mb-2">Contact: {item.contact}</p>
              <p className="text-gray-600 mb-2">
                Delivery Option: {item.deliveryoption}
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={item.gmap}
                  title="Google Map"
                  className="w-full h-full rounded-md"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Restaurant);

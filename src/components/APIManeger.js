import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",

  headers: { "x-api-key": "f59077f07dcf41128cfdaf29bfa042c9" },
  responseType: "application/json",
});

export const getFoodByName = async (name = "egg") => {
  try {
    const res = await instance.get(`/complexSearch?query=${name}&number=20`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodById = async (id) => {
  try {
    const res = await instance.get(`/${id}/information`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

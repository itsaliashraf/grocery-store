const { default: axios } = require("axios");

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api",
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((res) => res.data.data);
const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((res) => res.data.data);
const getAllProducts = () =>
  axiosClient.get("/products?populate=*").then((res) => res.data.data);

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
};

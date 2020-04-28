import axios from "../../../node_modules/axios";
import qs from "qs";

const csrfToken = document.querySelector("[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

// Axios do not support nested queries for the get method,
// So the external qs library is used for serializing
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "brackets", encode: false });
};

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    common: {
      "X-CSRF-TOKEN": csrfToken,
    },
  },
});

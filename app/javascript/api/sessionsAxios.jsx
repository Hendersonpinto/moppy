import axios from "../../../node_modules/axios";

const csrfToken = document.querySelector("[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    common: {
      "X-CSRF-TOKEN": csrfToken,
    },
  },
});

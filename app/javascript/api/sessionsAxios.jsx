import axios from "../../../node_modules/axios";

export default axios.create({
  baseURL: "http://localhost:5000",
});

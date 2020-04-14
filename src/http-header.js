import axios from "axios";

export default axios.create({
  baseURL: "http://104.248.10.249:80/api",
  headers: {
    "Content-type": "application/json",
  },
});

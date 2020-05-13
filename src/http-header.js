import axios from "axios";

export default axios.create({
  // baseURL: "http://104.248.10.249:80/api",
  // baseURL: "http://localhost:8080/api",
  baseURL: process.env.REACT_APP_BASE,

  headers: {
    "Content-type": "application/json",
  },
});

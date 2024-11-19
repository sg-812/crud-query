import axios from "axios";
import base_url from "./api_url";

let axiosInstance = axios.create({
  baseURL:base_url,
  headers:{
    'Content-Type': 'application/json'
  }
});

export default axiosInstance
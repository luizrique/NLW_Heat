import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.16.253.100:4000",
});

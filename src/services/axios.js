import axios from "axios";

const port = "https://randomuser.me/api";

const instance = axios.create({
  baseURL: port,
});

export default instance;

import axios from "axios";

/** base url to make requests to the movie database **/
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default instance;

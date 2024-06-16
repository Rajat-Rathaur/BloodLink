import axios from "axios";

/* const baseURL = "http://localhost:3177/"; */
const baseURL = "https://bloodlink-1.onrender.com/";

export default axios.create({ baseURL: baseURL });

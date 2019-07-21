import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

//instance.interceptors.request ...

//export this instance so we can use it in other files.
export default instance;

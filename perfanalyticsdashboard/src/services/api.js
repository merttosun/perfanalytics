import axios from "axios";

export default () => {
  console.log(process);
  axios.defaults.baseURL = process.env.DEV_APP_API_ENDPOINT;
  console.log(axios.defaults.baseURL);
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.interceptors.request.use((config) => {
    return config;
  });
  return axios;
};

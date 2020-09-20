import axios from "axios";

class Service {
  constructor() {
    let service = axios.create({
      headers: { csrf: "token" },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (err) => {
    if (!err.response || !err.response.data || !err.response.data.message) {
      return Promise.reject({ message: "error :(" });
    }
    return Promise.reject(err.response.data);
  };
  getAnalyzeBySiteUrl(path, callback) {
    console.log(path);
    return this.service
      .request({
        method: "GET",
        url: path,
        responseType: "json",
      })
      .then((response) => callback(response.status, response.data));
  }
  post(path, payload, callback) {
    console.log(path, payload, callback);
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => callback(response.status, response.data));
  }
}

export default new Service();

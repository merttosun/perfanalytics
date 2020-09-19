import api from "./api";

const token = process.env.TOKEN_KEY;
export default {
  getAnalysis() {
    return api().get("/analysis/");
  },
};

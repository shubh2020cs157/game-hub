import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a51629e69ef14cec988399b5d4869678",
  },
});

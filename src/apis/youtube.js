import axios from "axios";

const KEY = "AIzaSyA2KpSy8uddSn7s8LQyuF_BEJFl2dn33B4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  },
});

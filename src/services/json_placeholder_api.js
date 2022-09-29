import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (query) => {
  try {
    const data = await axios.get(URL, {
      params: {
        _start: query?.start || 0,
        _limit: query?.limit || 10,
      },
    });
    return data?.data;
  } catch (err) {
    return null;
  }
};

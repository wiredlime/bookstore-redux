import api from "../../apiService.js";

export const fetchBooks = async (props) => {
  try {
    let url = `/books?_page=${props.pageNum}&_limit=${props.limit}`;
    if (props.query) url += `&q=${props.query}`;
    const res = await api.get(url);
    return res;
  } catch (error) {
    return error;
  }
};

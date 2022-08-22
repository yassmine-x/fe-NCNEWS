import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://yassmine-app.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

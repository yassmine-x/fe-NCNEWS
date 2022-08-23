import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://yassmine-app.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data.article);
      return data.article;
    });
};

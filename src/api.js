import axios from "axios";

export const fetchArticles = (topic) => {
  return axios
    .get(`https://yassmine-app.herokuapp.com/api/articles`, {
      params: { topic: topic },
    })
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

export const fetchTopics = () => {
  return axios
    .get("https://yassmine-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

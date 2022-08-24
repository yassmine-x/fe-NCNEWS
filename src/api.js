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

export const fetchTopics = () => {
  return axios
    .get("https://yassmine-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const patchVotes = () => {};

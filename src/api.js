import axios from "axios";

export const fetchArticles = (topic, query, ASCorDESC) => {
  if (query) {
    return axios
      .get(`https://yassmine-app.herokuapp.com/api/articles`, {
        params: { sort_by: query, order: ASCorDESC || null, topic: topic },
      })
      .then(({ data }) => {
        return data.articles;
      });
  }
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

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const patchVotes = (article_id) => {
  return axios
    .patch(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const patchDownVotes = (article_id) => {
  return axios
    .patch(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://yassmine-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const postCommentToDataBase = (article_id, commentInput) => {
  return axios
    .post(
      `https://yassmine-app.herokuapp.com/api/articles/${article_id}/comments`,
      commentInput
    )
    .then(({ data }) => {
      return data.newComment;
    })
    .catch((err) => console.log(err));
};

export const deleteComment = (comment_id) => {
  console.log(comment_id);
  return axios.delete(
    `https://yassmine-app.herokuapp.com/api/comments/${comment_id}`
  );
};

import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://christian-nc-news.herokuapp.com/api',
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getArticles = async (topic) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: topic,
    },
  });
  return data.articles;
};

export const sortArticles = async (sortby, order) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      sort_by: 'title',
      order: 'desc',
    },
  });
  return data.articles;
};

export const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticleId = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const patchVotes = async (article_id) => {
  const { data } = await newsApi.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  });
  return data;
};

export const postCommentToArticle = async (article_id, user, body) => {
  const { data } = await newsApi.post(`articles/${article_id}/comments`, {
    username: user.username,
    body: body,
  });
  console.log(data);
  return data.comment[0];
};

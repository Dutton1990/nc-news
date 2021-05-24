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

export const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article
}
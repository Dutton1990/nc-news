import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(params.article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [params.article_id]);

  return (
    <div className="Article">
      <h2>{article.title}</h2>
      <br />
      <p>Posted by: {article.author}</p>
      <br />
      <p>Date posted: {article.created_at}</p>
      <br />
      <p>{article.body}</p>
      <br />
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default Article;

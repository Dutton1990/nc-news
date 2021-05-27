import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useParams, Link } from 'react-router-dom';
import Sortby from './Sortby';

const Articles = ({isLoading, setIsLoading}) => {
  const [articles, setArticles] = useState([]);
  

  const params = useParams();

  useEffect(() => {
    getArticles(params.topic).then((articlesFromApi) => {
      setIsLoading(false)
      setArticles(articlesFromApi)
      ;
    });
  }, [params.topic, setIsLoading]);

  return (
    
    <div class="column">
        {isLoading && <p>Loading...</p>}
        <h2>
          {params.topic ? `${params.topic.toUpperCase()}` : 'All Articles'}
        </h2>
        <Sortby articles={articles} setArticles={setArticles} />
        <ul>
          {articles.map(
            ({ title, topic, author, article_id, created_at, votes }) => {
              return (
                <li key={article_id}>
                  <Link to={`/articles/${article_id}`}>
                    <h3>{title}</h3>
                  </Link>
                  <h4>Topic: {topic}</h4>
                  <h5>Author: {author}</h5>
                  <h5>Created at: {created_at}</h5>
                  <h5>Votes: {votes}</h5>
                </li>
              );
            }
          )}
        </ul>
      </div>
  );
};

export default Articles;

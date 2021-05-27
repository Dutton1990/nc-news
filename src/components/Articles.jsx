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
        <section>


        <h2 class="subtitle is-4 block">
          {params.topic ? `${params.topic.toUpperCase()}` : 'All Articles'}
        </h2>
        </section>
        <Sortby articles={articles} setArticles={setArticles} />
        <ul>
          {articles.map(
            ({ title, topic, author, article_id, created_at, votes, comment_count}) => {
              return (
                <li class="block box" key={article_id}>
                  <Link to={`/articles/${article_id}`}>
                    <h3>{title}</h3>
                  </Link>
                  <h4>Topic: {topic}</h4>
                  <h5>Author: {author}</h5>
                  <h5>Created on: {created_at.slice(0,10)}</h5>
                  <h5>Votes: {votes}</h5>
                  <h5>Comments: {comment_count}</h5>
                </li>
              );
            }
          )}
        </ul>
      </div>
  );
};

export default Articles;

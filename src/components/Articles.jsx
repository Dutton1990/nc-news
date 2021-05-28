import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';
import Sortby from './Sortby';
import ArticleCard from './ArticleCard';

const Articles = ({ isLoading, setIsLoading, isErr, setIsErr }) => {
  const [articles, setArticles] = useState([]);

  const params = useParams();

  useEffect(() => {
    getArticles(params.topic)
      .then((articlesFromApi) => {
        setIsLoading(false);
        setArticles(articlesFromApi);
      })
      .catch((err) => {
        console.log(err);
        setIsErr(true);
      });
  }, [params.topic, setIsLoading, setIsErr]);

  if (isErr) return <p>There's been an error! Please try again :)</p>;

  return (
    <div className="column">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <section>
            <h2 className="subtitle is-3 block has-text-info">
              {params.topic ? `${params.topic.toUpperCase()}` : 'All Articles'}
            </h2>
          </section>
          <Sortby articles={articles} setArticles={setArticles} />
          <ArticleCard articles={articles} />
        </>
      )}
    </div>
  );
};

export default Articles;

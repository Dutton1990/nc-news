import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import Votes from './Votes';
var moment = require('moment');

const Article = ({ isLoading, setIsLoading, isErr, setIsErr }) => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(params.article_id)
      .then((articleFromApi) => {
        setIsLoading(false);
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setIsErr(true);
      });
  }, [params.article_id, setIsLoading, setIsErr]);

  if (isErr) return <p>There's been an error! Please try again :)</p>;

  return (
    <>
      <div className="columns is-vcentered">
        <div className="column">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="box">
                <h2 className="subtitle is-3">{article.title}</h2>
                
                <p className="content is-small">Posted by  {article.author} on{' '}
                  {moment(article.created_at).format('MMM Do YYYY')}</p>
                <br />
                <p>{article.body}</p>
                <br />
              </div>
              <Votes article={article} isErr={isErr} setIsErr={setIsErr} />
              <Comments article_id={params.article_id} />
            </>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

export default Article;

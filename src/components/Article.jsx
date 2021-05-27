import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import Votes from './Votes';

const Article = ({ isLoading, setIsLoading }) => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(params.article_id).then((articleFromApi) => {
      setIsLoading(false);
      setArticle(articleFromApi);
    });
  }, [params.article_id, setIsLoading]);

  return (
    <>
      <div class="columns is-vcentered">
        <div class="column">
          <div class="box">
            {isLoading && <p>Loading...</p>}
            <h2 class="subtitle is-3">{article.title}</h2>
            <br />
            <p class="content is-small">Posted by: {article.author}</p>
            <br />
            <p class="content is-small">
              Date posted: {article.created_at}
            </p>
            <br />
            <p>{article.body}</p>
            <br />
          </div>
          <Votes article={article} />
          <Comments article_id={params.article_id} />
        </div>
      </div>

      <br />
    </>
  );
};

export default Article;

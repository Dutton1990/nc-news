import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import Votes from './Votes';

const Article = ({ isLoading, setIsLoading, isErr, setIsErr}) => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(params.article_id).then((articleFromApi) => {
      setIsLoading(false);
      setArticle(articleFromApi);
    }).catch((err) => {
      setIsErr(true)
    });
  }, [params.article_id, setIsLoading, setIsErr]);

  if (isErr) return <p>There's been an error! Please try again :)</p>

  return (
    <>
      <div class="columns is-vcentered">
        <div class="column">
      { (isLoading) ? <p>Loading...</p> :
      <>
          <div class="box">
      
            <h2 class="subtitle is-3">{article.title}</h2>
            <br />
            <p class="content is-small">Posted by: {article.author}</p>
            <br />
            <p class="content is-small">Date posted: {article.created_at}</p>
            <br />
            <p>{article.body}</p>
            <br />
          </div>
          <Votes article={article} isErr={isErr} setIsErr={setIsErr}/>
          <Comments article_id={params.article_id} />
          </>
      }
        </div>
      </div>
      <br />
    </>
  );
};

export default Article;

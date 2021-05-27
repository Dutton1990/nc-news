import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import Votes from './Votes';

const Article = ({isLoading, setIsLoading}) => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(params.article_id).then((articleFromApi) => {
      setIsLoading(false)
      setArticle(articleFromApi);
    });
  }, [params.article_id, setIsLoading]);

  return (
    <>
      <div className="Article">
      {isLoading && <p>Loading...</p>}
        <h2>{article.title}</h2>
        <br />
        <p>Posted by: {article.author}</p>
        <br />
        <p>Date posted: {article.created_at}</p>
        <br />
        <p>{article.body}</p>
        <br />
        <Votes article={article} />
      </div>
      
      <br />
      <Comments article_id={params.article_id}/>
    </>
  );
};

export default Article;

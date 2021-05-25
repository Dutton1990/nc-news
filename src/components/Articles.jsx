import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useParams, Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  // const [sortby, setSortby] = useState([]);
  const params = useParams();

  useEffect(() => {
    getArticles(params.topic).then(
      (articlesFromApi) => {
        setArticles(articlesFromApi);
      }
    );
  }, [params.topic]);

  return (
    <div className="Articles">
      <h2>{params.topic ? `${params.topic.toUpperCase()}` : 'All Articles'}</h2>
      {/* <form>
        <label>Sort by:</label>
        <select
          className="dropdown"
          value={sortby}
          onChange={(event) => {
            setSortby(event.target.value);
          }}
        >
          <option value="show-all">Show all</option>
          <option value="title">Title</option>
          <option value="created_at">Created At</option>
        </select>
      </form> */}
      <ul>
        {articles.map(({ title, topic, author, article_id }) => {
          return (
            <li key={article_id}>
                <Link to={`/articles/${article_id}`}>
              <h3>{title}</h3>
              </Link>
              <h4>Topic: {topic}</h4>
              <h5>Author: {author}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;

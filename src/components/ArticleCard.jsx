import { Link } from 'react-router-dom';

const ArticleCard = ({ articles }) => {
  return (
    <ul>
      {articles.map(
        ({
          title,
          topic,
          author,
          article_id,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <li class="block box" key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h3>{title}</h3>
              </Link>
              <h4>Topic: {topic}</h4>
              <h5>Author: {author}</h5>
              <h5>Created on: {created_at.slice(0, 10)}</h5>
              <h5>Votes: {votes}</h5>
              <h5>Comments: {comment_count}</h5>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ArticleCard;
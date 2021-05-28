import { Link } from 'react-router-dom';
var moment = require('moment');

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
          body,
        }) => {
          return (
            <li className="block box " key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h3 className="has-text-info">{title}</h3>
              </Link>
              <h4 className="is-hidden-mobile">{body}</h4>
              <h4>Topic: {topic}</h4>
              <h5>Posted by {author} on {moment(created_at).format('MMM Do')}</h5>
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

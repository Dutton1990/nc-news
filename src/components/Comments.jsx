import { getCommentsByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Comments = () => {
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsByArticleId(params.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [params.article_id]);

  return (
    <>
      <div className="Comments">
        <h3>Comments</h3>
        <br />
        {comments.map((comment) => {
          return (
            <ul>
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <br />
                <p>Posted by: {comment.author}</p>
                <br />
                <p>Votes: {comment.votes}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Comments;

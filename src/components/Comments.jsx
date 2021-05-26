import useComments from '../hooks/useComments';
import AddComment from './AddComment'

const Comments = ({article_id}) => {
  const { comments, setComments } = useComments();

  return (
    <>
    <AddComment setComments={setComments} article_id={article_id}/>
      <div className="Comments">
        <h3>Comments</h3>
        <br />
        <ul >
        {comments.map((comment) => {
          return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <br />
                <p>Posted by: {comment.author}</p>
                <br />
                <p>Votes: {comment.votes}</p>
              </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

export default Comments;

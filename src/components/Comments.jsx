import useComments from '../hooks/useComments';
import AddComment from './AddComment';
import CommentsCard from './CommentsCard';

const Comments = ({ article_id }) => {
  const { comments, setComments } = useComments();

  return (
    <>
      <div className="column">
        <AddComment setComments={setComments} article_id={article_id} />
        <h3>Comments</h3>
        <br />
        <CommentsCard comments={comments} />
      </div>
    </>
  );
};

export default Comments;

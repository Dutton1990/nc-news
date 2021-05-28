const CommentsCard = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li className="block box" key={comment.comment_id}>
            <p>{comment.body}</p>
            <br />
            <p>Posted by: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsCard;

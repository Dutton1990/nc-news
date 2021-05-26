import { UserContext } from '../contexts/user';
import { useContext, useState } from 'react';
import { postCommentToArticle } from '../utils/api';

const AddComment = ({ article_id, setComments }) => {
  const [postComment, setPostComment] = useState([]);
  const user = useContext(UserContext);

  const newComment = (event) => {
    event.preventDefault();
    postCommentToArticle(article_id, user, postComment).then(
      (postedComment) => {
        setComments((currComments) => {
          const spreadComments = [postedComment, ...currComments];
          return spreadComments;
        });
      }
    );
  };

  const updateComment = (event) => {
    setPostComment(event.target.value);
  };

  return (
    <>
      <form onSubmit={newComment}>
        <label>Add a comment:</label>
        <input onChange={updateComment} value={postComment} type="text"></input>
        <button>Post!</button>
      </form>
    </>
  );
};

export default AddComment;

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
          setPostComment([]);
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
      <form className="box column" onSubmit={newComment}>
        <input
          onChange={updateComment}
          value={postComment}
          type="text"
          className="textarea is-info"
          placeholder="Add a comment"
          required
        ></input>
        <button className="button is-link is-light is-small">Post!</button>
      </form>
    </>
  );
};

export default AddComment;

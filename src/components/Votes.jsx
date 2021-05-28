import { useState } from 'react';
import { patchVotes } from '../utils/api';

const Votes = ({ article, isErr, setIsErr }) => {
  const [votes, setVotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const increaseVotes = (event) => {
    event.preventDefault();
    setVotes((currVotes) => currVotes + 1);
    patchVotes(article.article_id);
    setDisabled(true).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setIsErr(true);
    });
  };

  const decreaseVotes = (event) => {
    event.preventDefault();
    setVotes((currVotes) => currVotes - 1);
    patchVotes(article.article_id);
    setDisabled(true);
  };

  if (isErr) return <p>There's been an error! Please try again :)</p>;
  return (
    <>
      <label htmlFor="votes">Votes: {article.votes + votes}</label>
      <br />
      <button
        className="button is-small"
        id="votes"
        value="votes"
        type="button"
        onClick={increaseVotes}
        disabled={disabled}
      >
        Upvote
      </button>
      <button
        className="button is-small"
        id="votes"
        value="votes"
        type="button"
        onClick={decreaseVotes}
        disabled={disabled}
      >
        Downvote
      </button>
    </>
  );
};

export default Votes;

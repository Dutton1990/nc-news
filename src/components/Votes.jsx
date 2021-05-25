import { useState } from 'react';
import { patchVotes } from '../utils/api';

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);
  const [disabled, setDisabled] = useState(false)

  const increaseVotes = (event) => {
    event.preventDefault();
    setVotes((currVotes) => currVotes + 1);
    patchVotes(article.article_id);
    setDisabled(true)
  };

  return (
    <>
      <label htmlFor="votes">Votes: {article.votes + votes}</label>
      <br />
      <button id="votes" value="votes" type="button" onClick={increaseVotes} disabled={disabled}>
        Upvote
      </button>
    </>
  );
};

export default Votes;

import { useState } from 'react';
import { patchVotes } from '../utils/api';

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);

  const increaseVotes = (event) => {
    event.preventDefault();
    setVotes((currVotes) => currVotes + 1);
    console.log(article.article_id);
    patchVotes(article.article_id);
  };

  return (
    <>
      <label htmlFor="votes">Votes: {article.votes + votes}</label>
      <br />
      <button id="votes" value="votes" type="button" onClick={increaseVotes}>
        Upvote
      </button>
    </>
  );
};

export default Votes;

import { useState } from 'react';
import { patchVotes } from '../utils/api'

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);

  const increaseVotes = (event) => {
    event.preventDefault();
    setVotes((currVotes) => currVotes + 1)
    patchVotes(article.article_id.votes);
  };

//   const handleSendMessageClick = () => {
//     setSentMessageCount((currCount) => currCount + 1);
//     api.sendMessage();
//   };

  // need to patch request this - optimistic rendering

  return (
    <>
      <label htmlFor="votes">Votes: {article.votes + votes}</label>< br/>
      <button id="votes" value="votes" type="button" onClick={increaseVotes}>
      Upvote
      </button>
    </>
  );
};

export default Votes;

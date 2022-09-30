import { patchVotes, patchDownVotes } from "../api";
import { useState } from "react";

export default function IncVotes({ article_id, setArticle, votes }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  function handleClick() {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
    patchVotes(article_id)
      .then((article) => {
        setArticle(article);
        setOptimisticVotes(0);
      })
      .then(() => {
        setDisableButton(true);
      })
      .catch(() => {
        setOptimisticVotes(0);
      });
  }

  function handleClick2() {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes - 1;
    });
    patchDownVotes(article_id)
      .then((article) => {
        setArticle(article);
        setOptimisticVotes(0);
      })
      .then(() => {
        setDisableButton(true);
      })
      .catch(() => {
        setOptimisticVotes(0);
      });
  }

  return (
    <div>
      <button disabled={disableButton} onClick={handleClick}>
        Vote
      </button>
      <button disabled={disableButton} onClick={handleClick2}>
        Down Vote
      </button>
      <p>Votes: {votes + optimisticVotes}</p>
    </div>
  );
}

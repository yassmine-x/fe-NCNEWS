import { patchVotes, patchDownVotes } from "../api";
import { useState } from "react";

export default function IncVotes({ article_id, setArticle, votes }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  function handleClick() {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
    patchVotes(article_id)
      .then((article) => {
        setArticle(article);
        setOptimisticVotes(0);
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
      .catch(() => {
        setOptimisticVotes(0);
      });
  }

  return (
    <div>
      <button onClick={handleClick}>Vote</button>
      <button onClick={handleClick2}>Down Vote</button>
      <p>Votes: {votes + optimisticVotes}</p>
    </div>
  );
}

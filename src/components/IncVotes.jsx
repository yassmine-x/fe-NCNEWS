import { patchVotes, fetchArticles } from "../api";
import { useState, useEffect } from "react";

export default function IncVotes({ article_id, setArticle }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
        return optimisticVotes - 1;
      });

    fetchArticles(article_id).then(({ votes }) => {
      setVotes(votes);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Vote</button>
      <p>Votes: {votes + optimisticVotes}</p>
    </div>
  );
}

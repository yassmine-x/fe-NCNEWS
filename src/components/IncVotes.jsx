import { patchVotes, fetchArticles } from "..api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const { article_id } = useParams();

export default function IncVotes() {
  patchVotes(article_id);
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [votes, setVotes] = useState(0);

  fetchArticles(article_id).then(({ votes }) => {
    setVotes(votes);
  });

  return <div>Votes: {votes + optimisticVotes}</div>;
}

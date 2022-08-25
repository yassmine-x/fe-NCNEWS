import { fetchSingleArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IncVotes from "./IncVotes";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function SingleArticle() {
  const { article_id, topic } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleObject) => {
      setArticle(articleObject);
    });
  }, [article_id]);

  return (
    <div>
      <h2>
        <ul>
          <li className="no-bullet">
            <h2 className="article-title">{article.title}</h2>
          </li>
          <li className="no-bullet">
            <h3 className="author-name">{article.author}</h3>
          </li>
          <li className="no-bullet">{article.body}</li>
          <li className="no-bullet comments">
            <Link to={`/topics/${topic}/${article_id}/comments`}>
              comments:
            </Link>{" "}
            {article.comment_count}
          </li>
        </ul>
        <div>
          {" "}
          <IncVotes
            article_id={article_id}
            setArticle={setArticle}
            votes={article.votes}
          />
        </div>
      </h2>
      <p>
        {" "}
        {window.location.href.endsWith("/comments") ? (
          <Comments article_id={article_id} />
        ) : (
          "hello"
        )}
      </p>
    </div>
  );
}

import { fetchSingleArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IncVotes from "./IncVotes";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function SingleArticle() {
  const { article_id, topic } = useParams();
  const [article, setArticle] = useState([]);

  let user = "tickle122";
  useEffect(() => {
    fetchSingleArticle(article_id).then((articleObject) => {
      setArticle(articleObject);
    });
  }, [article_id]);

  return (
    <div>
      <section>
        <ul>
          <li className="no-bullet">
            <h2 className="article-title">{article.title}</h2>
          </li>
          <li className="no-bullet">
            <h3 className="author-name">{article.author}</h3>
          </li>
          <li className="no-bullet">{article.body}</li>
          <li className="no-bullet comments">
            <Link
              to={
                window.location.href.endsWith("/comments")
                  ? `/topics/${topic}/${article_id}`
                  : `/topics/${topic}/${article_id}/comments`
              }
            >
              {window.location.href.endsWith("/comments") ? "hide" : null}{" "}
              comments:
            </Link>{" "}
            {article.comment_count}
          </li>
          <li className="no-bullet"></li>
        </ul>
        <div>
          {" "}
          <IncVotes
            article_id={article_id}
            setArticle={setArticle}
            votes={article.votes}
          />
        </div>
      </section>
      {/* <section>
        {window.location.href.endsWith("/post-comment") ? (
          <PostComment article_id={article_id} user={user} />
        ) : null}
      </section> */}
      <section>
        {" "}
        {window.location.href.endsWith("/comments") ||
        window.location.href.endsWith("/post-comment") ? (
          <Comments article_id={article_id} user={user} />
        ) : null}
      </section>
    </div>
  );
}

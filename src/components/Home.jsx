import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, [setArticles]);

  return (
    <div>
      <h2>List of All Articles</h2>
      {articles.map(({ title, article_id, topic }) => {
        return (
          <li key={title} className="title-list">
            <Link to={`/topics/${topic}/${article_id}`}>{title}</Link>
          </li>
        );
      })}
    </div>
  );
}

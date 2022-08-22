import { fetchArticles } from "../api";
import { useEffect, useState } from "react";

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
      {articles.map(({ title }) => {
        return (
          <li key={title} className="title-list">
            {title}
          </li>
        );
      })}
    </div>
  );
}

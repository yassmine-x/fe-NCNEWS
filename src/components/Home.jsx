import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();
  console.log(topic);
  useEffect(() => {
    fetchArticles(topic).then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, [topic]);

  return (
    <div>
      <h2>List of Articles</h2>
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

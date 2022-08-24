import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

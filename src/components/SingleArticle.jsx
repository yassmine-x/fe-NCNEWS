import { fetchSingleArticle } from "../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articlesArray) => {
      setArticle(articlesArray);
    });
  }, [article_id]);

  return (
    <div>
      <h2>List of All Articles</h2>
    </div>
  );
}

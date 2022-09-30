import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [ASCorDESC, setASCorDESC] = useState("DESC");
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();
  useEffect(() => {
    fetchArticles(topic, query, ASCorDESC).then((articlesArray) => {
      setArticles(articlesArray);
      setIsLoading(false);
    });
  }, [topic, query, ASCorDESC]);

  if (isLoading) {
    return <p>loading, please wait</p>;
  }

  return (
    <div>
      <h2 className="subheading">List of All Articles</h2>
      <section>
        <h3>sort by:</h3>
        <button
          onClick={() => {
            setQuery("title");
          }}
        >
          title
        </button>
        <button
          onClick={() => {
            setQuery("topic");
          }}
        >
          topic
        </button>
        <button
          onClick={() => {
            setQuery("author");
          }}
        >
          author
        </button>
        <button
          onClick={() => {
            setQuery("body");
          }}
        >
          body
        </button>
        <button
          onClick={() => {
            setQuery("created_at");
          }}
        >
          created_at
        </button>
        <h3>Ascending order or Descending order?</h3>
        <button
          onClick={() => {
            setASCorDESC("ASC");
          }}
        >
          ASC
        </button>
        <button
          onClick={() => {
            setASCorDESC("DESC");
          }}
        >
          DESC
        </button>
        <p>
          {query.length > 0
            ? "Sorting " + "_" + query + "_" + " in order of " + ASCorDESC
            : null}{" "}
        </p>
      </section>
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
/*
can be sorted by any of these
 "title": "Seafood substitutions are increasing",
          "topic": "cooking",
          "author": "weegembump",
          "body": "Text from the article..",
          "created_at": 1527695953341 ==> ASC or DESC*/

//sort by :  ASC DESC

//title
//topic
//author
//body
//created_at

//if they click on any of the above buttons, concatenate "?sort_by=" + "button_name" and pass this down to the api
//maybe onClick use setVariable and change them from empty strings to actual useful variables

//add a button to only their comments. If username matches a comments user name.
//

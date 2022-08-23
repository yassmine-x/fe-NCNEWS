import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsArray) => {
      setTopics(topicsArray);
    });
  }, []);

  return (
    <section>
      <ul className="list">
        {topics.map(({ slug }) => {
          return (
            <li className="list-topics">
              <Link to={`/topics/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

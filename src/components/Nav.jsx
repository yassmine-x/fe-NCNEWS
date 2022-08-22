import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </section>
  );
}

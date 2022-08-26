import { useState } from "react";
import { postCommentToDataBase } from "../api";

export default function PostComment({ article_id }) {
  const [commentInput, setCommentInput] = useState({});
  const [message, setMessage] = useState("");

  let user = "tickle122";

  function handlesChange(event) {
    setCommentInput({ user: user, body: event.target.value });
  }
  function handlesSubmit(event) {
    event.preventDefault();
    postCommentToDataBase(article_id, commentInput);
    setMessage("Comment Submitted!");
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }

  return (
    <form onSubmit={handlesSubmit}>
      <input type="text" onChange={handlesChange} />
      <button type="submit">Submit Comment</button>
      <p>{message}</p>
    </form>
  );
}

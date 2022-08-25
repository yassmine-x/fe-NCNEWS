import { useEffect, useState } from "react";
import { fetchComments } from "../api";

export default function Comments({ article_id }) {
  const [commentsArr, setComment] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComment(comments);
    });
  }, [article_id]);

  return (
    <ul>
      {commentsArr.map((comment) => {
        return (
          <div>
            <img
              className="user-image-comments"
              src={comment.avatar_url}
              alt="user profile"
            />
            <p>{comment.username}</p>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>votes:{comment.votes}</p>
          </div>
        );
      })}
    </ul>
  );
}

//if url contains "/comments",
//render <Comments />

import { useEffect, useState } from "react";
import { deleteComment, fetchComments } from "../api";
import PostComment from "./PostComment";

export default function Comments({ article_id, user }) {
  const [commentsArr, setComment] = useState([]);
  const [state, setState] = useState(false);
  const [reloadComments, setReloadComments] = useState(true);

  function handlesClick(event, comment_id) {
    deleteComment(comment_id);
    setState(true);
  }

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComment(comments);
    });

    if (state) {
      fetchComments(article_id).then((comments) => {
        setComment(comments);
        setState(false);
      });
    }
    if (!reloadComments) {
      fetchComments(article_id).then((comments) => {
        setComment(comments);
        setReloadComments(true);
      });
    }
  }, [article_id, state, reloadComments]);

  return (
    <ul>
      <PostComment
        article_id={article_id}
        user={user}
        setReloadComments={setReloadComments}
      />
      {commentsArr.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <img
              className="user-image-comments"
              src={comment.avatar_url}
              alt="user profile"
            />
            <p>{comment.username}</p>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>votes:{comment.votes}</p>
            <p>
              {comment.username === user ? (
                <button
                  onClick={(event) => {
                    handlesClick(event, comment.comment_id);
                  }}
                >
                  delete
                </button>
              ) : null}
            </p>
          </div>
        );
      })}
      <p>{state ? "your comment is being deleted, please wait" : null}</p>
    </ul>
  );
}

//things to work on,
//how to harness the power of useEffect so im not doing this ASKED ON SLACK
//hide comments CHECK
//next ticket
//get tips on error handling.WATCH LECTURE
//move topics to home page
//add css and implement plan

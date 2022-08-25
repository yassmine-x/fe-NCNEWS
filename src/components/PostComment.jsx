import { useState } from "react";
import { postCommentToDataBase } from "../api";

export default function PostComment() {
  const [commentInput, setCommentInput] = useState([]);

  function handlesSubmit() {
    postCommentToDataBase(commentInput);
  }

  return (
    <form
      onChange={(event) => {
        setCommentInput(event);
      }}
    ></form>
  );
}

//research onChange
//research onSubmit
//research axios.post

import React, { useEffect, useState } from "react";
import Comments from "../components/Comments/Comments";
import NewComment from "../components/Comments/NewComment";
import fakeData from "../data/data.json";

const MainPage = () => {
  const [data, setData] = useState(fakeData);

  function updateVote(id, score) {
    let temp = data;
    temp.comments.forEach((comment) => {
      if (comment.id === id) {
        comment.score += score;
      }
      if (comment?.replies?.length > 0) {
        findCommentToVote(comment.replies, id, score);
      }
    });
    setData({ ...temp });
  }
  const findCommentToVote = (replies, id, score) => {
    replies.forEach((reply) => {
      if (reply.id === id) {
        reply.score += score;
      }
      if (reply?.replies?.length > 0) {
        findCommentToVote(reply, reply.replies, id, score);
      }
    });
  };
  return (
    <main className="relative flex  flex-wrap place-content-center gap-6 font-mono antialiased md:w-128">
      <Comments data={data} setData={setData} updateVote={updateVote} />
      <NewComment data={data} setData={setData} />
    </main>
  );
};

export default MainPage;

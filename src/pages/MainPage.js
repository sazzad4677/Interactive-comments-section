import React, { useState } from "react";
import Comments from "../components/Comments/Comments";
import NewComment from "../components/Comments/NewComment";
import fakeData from "../data/data.json";

const MainPage = () => {
  const [data, setData] = useState(fakeData);

  // generate a unique id
  const createID = function () {
    return Math.floor(Math.random() * 1000);
  };

  // Vote the comments
  const updateVote = (id, score) => {
    let temp = data;
    temp.comments.forEach((comment) => {
      if (comment.id === id) {
        comment.score += score;
      }
      if (comment?.replies?.length > 0) {
        findCommentToVote(id, comment.replies, score);
      }
    });
    setData({ ...temp });
  };

  const findCommentToVote = (id, replies, score) => {
    replies.forEach((reply) => {
      if (reply.id === id) {
        reply.score += score;
      }
      if (reply?.replies?.length > 0) {
        findCommentToVote(reply, id, reply.replies, score);
      }
    });
  };


  const newComment = (content) => {
    let temp = data;
    temp.comments.push({
      id: createID(),
      content,
      createdAt: Date.now(),
      replies: [],
      score: 0,
      user: { ...data.currentUser },
    });
    setData({ ...temp });
  };
  return (
    <main className="relative flex flex-wrap place-content-center gap-6 font-mono antialiased md:w-128">
      <Comments
        data={data}
        setData={setData}
        updateVote={updateVote}
      />
      <NewComment data={data} setData={setData} newComment={newComment} />
    </main>
  );
};

export default MainPage;

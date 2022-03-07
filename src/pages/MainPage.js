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

  const newReply = (repliedUserId, replyingTo, content) => {
    let temp = data;
    temp.comments.forEach((comment) => {
      if (comment.id === repliedUserId) {
        comment.replies = [
          ...comment.replies,
          {
            id: createID(),
            content,
            createdAt: Date.now(),
            score: 0,
            replyingTo,
            user: {
              ...data.currentUser,
            },
          },
        ];
      } else {
        findCommentToReply(
          comment,
          comment.replies,
          repliedUserId,
          content,
          replyingTo
        );
      }
    });
    setData({ ...temp });
  };

  const findCommentToReply = (
    parentComment,
    replies,
    repliedUserId,
    content,
    replyingTo
  ) => {
    let temp = parentComment;
    replies.forEach((reply) => {
      if (reply.id === repliedUserId) {
        temp.replies.push({
          id: createID(),
          content,
          createdAt: Date.now(),
          score: 0,
          replyingTo,
          user: { ...data.currentUser },
        });
      } else {
        if (reply?.replies?.length > 0) {
          findCommentToReply(reply, reply.replies, repliedUserId, content);
        }
      }
    });
  };

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  return (
    <main className="relative flex flex-wrap place-content-center gap-6 font-mono antialiased md:w-128">
      <Comments
        data={data}
        setData={setData}
        updateVote={updateVote}
        newReply={newReply}
        timeSince={timeSince}
      />
      <NewComment data={data} setData={setData} newComment={newComment} />
    </main>
  );
};

export default MainPage;

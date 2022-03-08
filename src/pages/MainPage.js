import React from "react";
import Comments from "../components/Comments/Comments";
import NewComment from "../components/Comments/NewComment";
import fakeData from "../data/data.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MainPage = () => {
  const [data, setData] = useLocalStorage("comments", fakeData);

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

  // Find and vote the comments
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

  // add new comment
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

  // Add new reply
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

  // nested reply
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

  // Update comment
  const updateComment = (commentId, content) => {
    let temp = data;
    temp.comments.forEach((comment) => {
      if (comment.id === commentId) {
        comment.content = content;
      } else {
        if (comment?.replies?.length > 0) {
          findCommentAndUpdate(comment.replies, commentId, content);
        }
      }
    });
    setData({ ...temp });
  };

  const findCommentAndUpdate = (replies, commentId, content) => {
    replies.forEach((reply) => {
      if (reply.id === commentId) {
        reply.content = content;
      } else {
        if (reply?.replies?.length > 0) {
          findCommentAndUpdate(reply, reply.replies, commentId, content);
        }
      }
    });
  };

  // Delete the comment
  const deleteComment = (id) => {
    let temp = data;
    temp.comments.forEach((comment) => {
      if (comment.id === id) {
        temp.comments = temp.comments.filter(
          (filComment) => filComment.id !== id
        );
      } else {
        if (comment?.replies?.length > 0) {
          findCommentToDelete(comment, comment.replies, id);
        }
      }
    });
    setData({ ...temp });
  };

  const findCommentToDelete = (parentComment, replies, id) => {
    let temp = parentComment;
    replies.forEach((reply) => {
      if (reply.id === id) {
        temp.replies = temp.replies.filter(
          (filComment) => filComment.id !== id
        );
      } else {
        if (reply?.replies?.length > 0) {
          findCommentToDelete(reply, reply.replies, id);
        }
      }
    });
  };

  // Time calculation
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
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
      <NewComment data={data} setData={setData} newComment={newComment} />
    </main>
  );
};

export default MainPage;

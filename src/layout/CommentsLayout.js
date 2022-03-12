import React, { useState } from "react";
import { toast } from "react-toastify";
import Reply from "../components/Comments/Reply";
import useTextArea from "../hooks/useTextArea";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import { ReactComponent as EditIcon } from "../images/icon-edit.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "../images/icon-reply.svg";
import DeleteModal from "./DeleteModal";

const CommentsLayout = ({
  comment,
  images,
  updateVote,
  data,
  setData,
  newReply,
  timeSince,
  updateComment,
  deleteComment,
}) => {
  const { id, content, createdAt, score, user, replyingTo } = comment;
  const { currentUser } = data;
  const [reply, setReply] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [replyUser, setReplyUser] = useState("");
  const [textAreaHeight, textareaRef, textAreaValue, setValue] = useTextArea();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (!textAreaValue.trim()) {
      return toast.error("Please enter some text");
    }
    updateComment(
      id,
      replyingTo
        ? textAreaValue.replace(`@${replyingTo}`, "").trim()
        : textAreaValue.trim()
    );
    setEdit(false);
  };
  const [commentToDelete, setCommentToDelete] = useState(null);
  const ReplyEditDeleteButton = () => {
    return (
      <>
        {currentUser.username !== user.username ? (
          <button
            onClick={() => {
              setReply((prev) => !prev);
              setReplyUser(comment);
            }}
            className="replyIcon flex items-center font-medium text-primary-moderate-blue hover:text-primary-grayish-blue"
            title="reply"
          >
            <ReplyIcon className="font-medium" /> &nbsp; Reply
          </button>
        ) : (
          // Delete and Edit button
          <div className="flex items-center gap-6 ">
            <button
              onClick={() => {
                setOpen(true);
                setCommentToDelete(id);
              }}
              className="deleteIcon flex cursor-pointer items-center gap-2 font-medium text-primary-soft-red hover:text-primary-pale-red"
              title="delete"
            >
              <DeleteIcon className="font-medium" />
              Delete
            </button>
            <button
              onClick={() => {
                setEdit((prev) => !prev);
                setValue(replyingTo ? `@${replyingTo} ${content}` : content);
              }}
              className="editIcon flex cursor-pointer items-center gap-2 font-medium text-primary-moderate-blue hover:text-primary-grayish-blue"
              title="edit"
            >
              <EditIcon className="font-medium" />
              Edit
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="mx-auto flex w-full items-start justify-between gap-5 rounded-lg bg-neutral-white p-5 flex-row flex-wrap md:flex-nowrap">
        {/* voting button */}
        <div className="max-w-10 flex max-h-24 items-center justify-around rounded-lg bg-neutral-very-light-gray py-2 text-neutral-grayish-blue order-2 h-10 w-24 flex-row md:order-1 md:h-24 md:w-11 md:flex-col">
          {/* Plus button */}
          <button
            onClick={() => {
              updateVote(id, 1);
              currentUser.hasUpVoted = true;
              currentUser.hasDownVoted = false;
            }}
            className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium"
            title="upvote"
          >
            <PlusIcon className="scoreUpDownButton font-medium" />
          </button>
          <p className="py-3 text-center font-medium text-primary-moderate-blue">
            {score}
          </p>
          {/* Minus button */}
          <button
            onClick={() => {
              updateVote(id, -1);
              currentUser.hasDownVoted = true;
              currentUser.hasUpVoted = false;
            }}
            className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium"
            title="downvote"
          >
            <MinusIcon className="scoreUpDownButton font-medium" />
          </button>
        </div>
        {/* Comments */}
        <div className="flex w-full flex-col flex-wrap gap-4 text-base font-medium text-neutral-dark-blue md:order-2">
          <div className="flex justify-between gap-4">
            {/* Profile */}
            <div className="flex items-center gap-4 ">
              <img
                className="h-10 w-10 rounded-full object-cover"
                alt={user.username}
                src={require(`../images/avatars/${images}`)}
              />
              {user.username}
              {/* You Tag */}
              {currentUser.username === user.username && (
                <span className="rounded bg-primary-moderate-blue px-1.5 py-1 text-center text-xs text-neutral-white">
                  you
                </span>
              )}
              {/* Comments Time */}
              <span className="text-base font-normal text-neutral-grayish-blue">
                {typeof createdAt === "number"
                  ? `${timeSince(createdAt)} ago`
                  : createdAt}
              </span>
            </div>
            {/* Reply edit and delete Button for desktop only*/}
            <div className="hidden md:block">
              <ReplyEditDeleteButton />
            </div>
          </div>
          {edit && (
            <form onSubmit={handelFormSubmit} className="-mb-2 flex flex-col">
              <textarea
                onChange={(e) => setValue(e.target.value)}
                ref={textareaRef}
                style={{
                  minHeight: textAreaHeight,
                  resize: "none",
                }}
                value={textAreaValue}
                placeholder="Add a comment..."
                className="self-start"
              />
              <button
                type="submit"
                className="text-md relative mt-3  w-28 self-end rounded-lg border bg-primary-moderate-blue px-4 py-3 font-mono text-base font-medium text-neutral-white hover:bg-primary-grayish-blue"
                title="update"
              >
                UPDATE
              </button>
            </form>
          )}
          {/* Comments */}
          {!edit && (
            <div className="w-full text-base font-normal leading-6 text-neutral-grayish-blue">
              {replyingTo && (
                <span className="font-bold text-primary-moderate-blue">
                  @{replyingTo}
                </span>
              )}
              &nbsp;
              {content}
            </div>
          )}
        </div>
        {/* Reply Edit and Delete button for mobile only */}
        <div className="ml-auto order-3 md:hidden">
          <ReplyEditDeleteButton />
        </div>
      </div>
      {reply && (
        <Reply
          data={data}
          setData={setData}
          reply={reply}
          setReply={setReply}
          replyUser={replyUser}
          newReply={newReply}
        />
      )}
      <DeleteModal
        open={open}
        setOpen={setOpen}
        deleteComment={deleteComment}
        commentToDelete={commentToDelete}
      />
    </>
  );
};

export default CommentsLayout;

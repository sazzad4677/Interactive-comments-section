import React from "react";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as ReplyIcon } from "../images/icon-reply.svg";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import { ReactComponent as EditIcon } from "../images/icon-edit.svg";
const CommentsLayout = ({ comment, images, updateVote, currentUser }) => {
  const { id, content, createdAt, score, user } = comment;
  return (
    <>
      <div className="mx-auto flex w-full flex-row flex-nowrap items-start justify-between gap-5 rounded-lg bg-neutral-white p-5">
        {/* voting button */}
        <div className="max-w-10 flex h-24 max-h-24 w-11 flex-col items-stretch justify-around rounded-lg bg-neutral-very-light-gray py-2 text-neutral-grayish-blue">
          {/* Plus button */}
          <button
            onClick={() => updateVote(id, 1)}
            className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium"
          >
            <PlusIcon className="scoreUpDownButton font-medium" />
          </button>
          <p className="py-3 text-center font-medium text-primary-moderate-blue">
            {score}
          </p>
          {/* Minus button */}
          <button
            onClick={() => updateVote(id, -1)}
            className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium"
          >
            <MinusIcon className="scoreUpDownButton font-medium" />
          </button>
        </div>
        <div className="flex w-full flex-col gap-4 text-base font-medium text-neutral-dark-blue">
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
                {createdAt}
              </span>
            </div>
            {/* Reply Button */}
            {currentUser.username !== user.username && (
              <div className="replyIcon flex cursor-pointer items-center gap-2 text-primary-moderate-blue hover:text-primary-grayish-blue">
                <ReplyIcon className="font-medium" />
                Reply
              </div>
            )}
            {currentUser.username === user.username && (
              <div className="flex items-center gap-6 ">
                <div className="deleteIcon flex cursor-pointer items-center gap-2 text-primary-soft-red hover:text-primary-pale-red">
                  <DeleteIcon className="font-medium" />
                  Delete
                </div>
                <div className="editIcon flex cursor-pointer items-center gap-2 text-primary-moderate-blue hover:text-primary-grayish-blue">
                  <EditIcon className="font-medium" />
                  Edit
                </div>
              </div>
            )}
          </div>
          {/* Comments */}
          <div className="w-full text-base font-normal leading-6 text-neutral-grayish-blue">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsLayout;

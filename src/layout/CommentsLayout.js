import React from "react";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Reply } from "../images/icon-reply.svg";
import reply from "../images/icon-reply.svg";

const CommentsLayout = ({ comment, images }) => {
  const { id, content, createdAt, score, user } = comment;
  return (
    <>
      <div className="mx-auto flex w-full flex-row flex-nowrap items-start justify-between gap-5 rounded-lg bg-neutral-white p-5">
        {/* voting button */}
        <div className="max-w-10 flex h-24 max-h-24 w-11 flex-col items-stretch justify-around rounded-lg bg-neutral-very-light-gray py-2 text-neutral-grayish-blue">
          {/* Plus button */}
          <button className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium">
            <Plus className="scoreUpDownButton font-medium" />
          </button>
          <p className="py-3 text-center font-medium text-primary-moderate-blue">
            {score}
          </p>
          {/* Minus button */}
          <button className="flex items-center justify-center rounded bg-neutral-very-light-gray font-medium">
            <Minus className="scoreUpDownButton font-medium" />
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
              {/* Comments Time */}
              <span className="text-base font-normal text-neutral-grayish-blue">
                {createdAt}
              </span>
            </div>
            {/* Reply Button */}
            <div className="reply flex cursor-pointer items-center gap-2 text-primary-moderate-blue hover:text-primary-grayish-blue">
              <Reply className="font-medium" />
              Reply
            </div>
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

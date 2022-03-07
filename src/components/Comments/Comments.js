import React, { Fragment } from "react";
import CommentsLayout from "../../layout/CommentsLayout";

const Comments = ({ data, setData, updateVote, newReply, timeSince }) => {
  return (
    <>
      {data?.comments.map((comment) => (
        <Fragment key={comment.id}>
          <div className="flex flex-col justify-center gap-6 w-full">
            <CommentsLayout
              comment={comment}
              data={data}
              setData={setData}
              images={comment.user.image.webp}
              updateVote={updateVote}
              newReply={newReply}
              timeSince={timeSince}
            />
          </div>
          {comment.replies?.length > 0 && (
            <div className="ml-10 flex flex-wrap gap-6 border-l-2 pl-10 w-full">
              {comment.replies.map((reply) => (
                <Fragment key={reply.id}>
                  <CommentsLayout
                    data={data}
                    setData={setData}
                    comment={reply}
                    images={reply.user.image.webp}
                    updateVote={updateVote}
                    newReply={newReply}
                    timeSince={timeSince}
                  />
                </Fragment>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Comments;

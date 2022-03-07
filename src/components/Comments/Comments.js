import React, { Fragment } from "react";
import CommentsLayout from "../../layout/CommentsLayout";

const Comments = ({ data, setData, updateVote }) => {
  return (
    <>
      {data?.comments.map((comment, key) => (
        <Fragment key={comment.id}>
          <div className="flex flex-col justify-center gap-6">
            <CommentsLayout
              comment={comment}
              data={data}
              setData={setData}
              currentUser={data.currentUser}
              images={comment.user.image.webp}
              updateVote={updateVote}
            />
          </div>
          {comment.replies?.length > 0 && (
            <div className="ml-10 flex flex-wrap gap-6 border-l-2 pl-10">
              {comment.replies.map((reply) => (
                <Fragment key={reply.id}>
                  <CommentsLayout
                    comment={reply}
                    currentUser={data.currentUser}
                    images={reply.user.image.webp}
                    updateVote={updateVote}
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

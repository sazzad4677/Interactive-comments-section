import React, { Fragment } from "react";
import CommentsLayout from "../../layout/CommentsLayout";

const Comments = ({
  data,
  setData,
  updateVote,
  newReply,
  timeSince,
  updateComment,
  deleteComment,
}) => {
  return (
    <>
      {data?.comments
        .sort((a, b) => (a.score > b.score && -1 ? a.score < b.score && 1 : 0))
        .map((comment) => (
          <Fragment key={comment.id}>
            <div className="flex w-full flex-col justify-center gap-6 ">
              <CommentsLayout
                comment={comment}
                data={data}
                setData={setData}
                images={comment.user.image.webp}
                updateVote={updateVote}
                newReply={newReply}
                timeSince={timeSince}
                updateComment={updateComment}
                deleteComment={deleteComment}
              />
            </div>
            {comment.replies?.length > 0 && (
              <div className="flex w-full flex-wrap gap-6 border-l-2 mobile:ml-0 mobile:pl-4 desktop:ml-10 desktop:pl-10">
                {comment.replies
                  .sort((a, b) =>
                    a.score > b.score && -1 ? a.score < b.score && 1 : 0
                  )
                  .map((reply) => (
                    <Fragment key={reply.id}>
                      <CommentsLayout
                        data={data}
                        setData={setData}
                        comment={reply}
                        images={reply.user.image.webp}
                        updateVote={updateVote}
                        newReply={newReply}
                        timeSince={timeSince}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
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

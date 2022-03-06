import React, { Fragment } from "react";
import CommentsLayout from "../../layout/CommentsLayout";

const Comments = ({ data, setData }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-6">
        {data?.comments.map((comment, key) => (
          <Fragment key={comment.id}>
            <CommentsLayout
              comment={comment}
              data={data}
              setData={setData}
              currentUser={data.currentUser}
              images={comment.user.image.webp}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Comments;

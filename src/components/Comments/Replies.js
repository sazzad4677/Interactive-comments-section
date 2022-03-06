import React, { Fragment } from "react";
import RepliesLayout from "../../layout/RepliesLayout";

const Replies = ({data}) => {
  return (
    <div className="ml-10 flex flex-wrap gap-6 border-l-2 pl-10">
      {data?.comments.map((comment, key) => (
          <Fragment key={comment.id}>
            <RepliesLayout
              comment={comment}
              currentUser={data.currentUser}
              images={comment.user.image.webp}
            />
          </Fragment>
        ))}
    </div>
  );
};

export default Replies;

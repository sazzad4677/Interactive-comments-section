import React, { useState } from "react";
import NewCommentLayout from "../../layout/NewCommentLayout";

const NewComment = ({
  data,
  setData,
  reply,
  setReply,
  replyUser,
  newComment,
}) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const onChange = (event) => setTextAreaValue(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    newComment(textAreaValue);
  };

  return (
    <div className="w-full">
      <NewCommentLayout
        data={data}
        setData={setData}
        reply={reply}
        setReply={setReply}
        replyUser={replyUser}
        newComment={newComment}
        onChange={onChange}
        onSubmit={onSubmit}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
    </div>
  );
};

export default NewComment;

import React, { useState } from "react";
import NewCommentLayout from "../../layout/NewCommentLayout";

const Reply = ({ replyUser, data, setData, reply, setReply }) => {
  const [textAreaValue, setTextAreaValue] = useState(
    `@${replyUser?.user?.username} `
  );
  const onChange = (event) => setTextAreaValue(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setReply((prev) => !prev);
  };
  return (
    <div className="w-full">
      <NewCommentLayout
        data={data}
        setData={setData}
        reply={reply}
        setReply={setReply}
        replyUser={replyUser}
        onChange={onChange}
        onSubmit={onSubmit}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
    </div>
  );
};

export default Reply;

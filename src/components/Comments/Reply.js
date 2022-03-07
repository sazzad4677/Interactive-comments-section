import React, { useState } from "react";
import NewCommentLayout from "../../layout/NewCommentLayout";

const Reply = ({ replyUser, newReply, data, setData, reply, setReply }) => {
  const {
    id,
    user: { username },
  } = replyUser;
  const [textAreaValue, setTextAreaValue] = useState(
    `@${username} `
  );
  const onChange = (event) => setTextAreaValue(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    newReply(
      id,
      username,
      textAreaValue.replace(`@${username}`, "")
    );
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

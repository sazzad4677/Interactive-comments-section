import React from "react";
import useTextArea from "../../hooks/useTextArea";
import NewCommentLayout from "../../layout/NewCommentLayout";

const Reply = ({ replyUser, newReply, data, setData, reply, setReply }) => {
  const {
    id,
    user: { username },
  } = replyUser;
  const [textAreaHeight, textareaRef, textAreaValue, setValue] = useTextArea();

  const onSubmit = (e) => {
    e.preventDefault();
    newReply(id, username, textAreaValue.replace(`@${username} `, ""));
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
        onSubmit={onSubmit}
        textAreaValue={textAreaValue}
        textAreaHeight={textAreaHeight}
        textareaRef={textareaRef}
        setValue={setValue}
      />
    </div>
  );
};

export default Reply;

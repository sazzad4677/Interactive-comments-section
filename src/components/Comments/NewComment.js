import React from "react";
import useTextAreaWidth from "../../hooks/useTextArea";
import NewCommentLayout from "../../layout/NewCommentLayout";

const NewComment = ({
  data,
  setData,
  reply,
  setReply,
  replyUser,
  newComment,
}) => {
  const [textAreaHeight, textareaRef, textAreaValue, setValue] =
    useTextAreaWidth();
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
        onSubmit={onSubmit}
        textAreaValue={textAreaValue}
        textAreaHeight={textAreaHeight}
        textareaRef={textareaRef}
        setValue={setValue}
      />
    </div>
  );
};

export default NewComment;

import React from "react";
import { toast } from "react-toastify";
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
    if (!textAreaValue.trim()) {
      return toast.error("Please enter some text")
    }
    newComment(textAreaValue.trim());
    setValue("")
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

import React, { useState } from "react";
import { toast } from "react-toastify";
import useTextArea from "../../hooks/useTextArea";
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
    useTextArea();
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!textAreaValue.trim()) {
      setError(true);
      return toast.error("Please enter some text");
    }
    setError(false);
    newComment(textAreaValue.trim());
    setValue("");
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
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default NewComment;

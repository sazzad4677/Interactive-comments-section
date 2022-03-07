import React, { useLayoutEffect, useRef, useState } from "react";

const NewCommentLayout = ({ data, setData, reply, setReply }) => {
  // initial height for the text field
  const textAreaHeight = 32;
  // Text area reference
  const textareaRef = useRef(null);
  // get the value of the text field
  const [textAreaValue, setTextAreaValue] = useState("");
  const [value, setValue] = useState(`@`);
  // Set the value on Change
  const onChange = (event) => setTextAreaValue(event.target.value);
  // Dynamically increase the height of the text
  useLayoutEffect(() => {
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      textAreaHeight
    )}px`;
  }, [textAreaValue]);

  return (
    <div className="rounded-md bg-neutral-white py-6 px-4">
      <form className="flex flex-wrap gap-5">
        <div>
          <img
            className="ml-0.5 h-10 w-10 rounded-full object-cover"
            alt={data?.currentUser.username}
            src={require(`../images/avatars/${data?.currentUser.image.webp}`)}
          />
        </div>
        <div className="flex flex-grow flex-wrap gap-4">
          <textarea
            onChange={onChange}
            ref={textareaRef}
            style={{
              minHeight: textAreaHeight,
              resize: "none",
            }}
            className="border-1 focus:border-1 text-md w-full resize-none overflow-hidden rounded-md border-neutral-very-light-gray px-5 pb-8 font-mono text-neutral-dark-blue focus:border-neutral-grayish-blue focus:ring-0"
            placeholder="Add a comment..."
          />
        </div>
        <div className="ml-auto">
          <button
            onClick={() => setReply((prev) => !prev)}
            type="submit"
            className="text-md relative h-fit w-28 rounded-lg border bg-primary-moderate-blue px-4 py-3 font-mono text-base font-medium text-neutral-white hover:bg-primary-grayish-blue"
          >
            REPLY
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCommentLayout;

//  pt-4 pr-0 pb-10 pl-4

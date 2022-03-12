import React from "react";

const NewCommentLayout = ({
  data,
  onSubmit,
  textAreaHeight,
  textareaRef,
  textAreaValue,
  setValue,
  error,
  setError,
  reply,
}) => {
  return (
    <div className="rounded-md bg-neutral-white py-6 px-4">
      <form
        onSubmit={onSubmit}
        className="flex gap-5 flex-wrap md:flex-nowrap"
      >
        <div className="order-1 md:order-none ">
          <img
            className="ml-0.5 w-10 md:w-fit"
            alt={data?.currentUser.username}
            src={require(`../images/avatars/${data?.currentUser.image.webp}`)}
          />
        </div>
        <div className="flex w-full flex-wrap gap-4 order-none">
          <textarea
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            ref={textareaRef}
            style={{
              minHeight: `${textAreaHeight}rem`,
              resize: "none",
            }}
            value={textAreaValue}
            placeholder="Add a comment..."
            className={error ? `border-primary-soft-red` : ""}
          />
        </div>
        <div className="ml-auto order-2 md:order-none">
          <button
            type="submit"
            className="text-md relative h-fit w-28 rounded-lg border bg-primary-moderate-blue px-4 py-3 font-mono text-base font-medium text-neutral-white hover:bg-primary-grayish-blue"
            title="add comments"
          >
            {reply ? "REPLY" : "SEND"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCommentLayout;

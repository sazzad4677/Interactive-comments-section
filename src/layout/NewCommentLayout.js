import React from "react";

const NewCommentLayout = ({
  data,
  onSubmit,
  textAreaHeight,
  textareaRef,
  textAreaValue,
  setValue,
}) => {
  return (
    <div className="rounded-md bg-neutral-white py-6 px-4">
      <form onSubmit={onSubmit} className="flex mobile:flex-wrap desktop:flex-nowrap gap-5">
        <div className="mobile:order-1 desktop:order-none ">
          <img
            className="ml-0.5 mobile:w-10 desktop:w-fit"
            alt={data?.currentUser.username}
            src={require(`../images/avatars/${data?.currentUser.image.webp}`)}
          />
        </div>
        <div className="flex flex-grow flex-wrap gap-4 mobile:order-none desktop:order-none w-full">
          <textarea
            onChange={(e) => setValue(e.target.value)}
            ref={textareaRef}
            style={{
              minHeight: textAreaHeight,
              resize: "none",
            }}
            value={textAreaValue}
            placeholder="Add a comment..."
          />
        </div>
        <div className="ml-auto mobile:order-2 desktop:order-none">
          <button
            type="submit"
            className="text-md relative h-fit w-28 rounded-lg border bg-primary-moderate-blue px-4 py-3 font-mono text-base font-medium text-neutral-white hover:bg-primary-grayish-blue"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCommentLayout;

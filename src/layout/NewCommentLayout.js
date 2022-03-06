import React from "react";

const NewCommentLayout = ({ data, setData }) => {
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
            className="border-1 focus:border-1 w-full resize-y rounded-md border-neutral-very-light-gray pt-3 pr-0 pb-9 pl-3 font-mono text-sm text-neutral-dark-blue focus:border-primary-moderate-blue focus:ring-0"
            placeholder="Add a comment..."
          />
        </div>
        <div className="ml-auto">
          <button type="submit" className="relative w-28 h-fit px-5 py-2.5 ml-4 font-medium border rounded-lg text-white bg-primary-moderate-blue text-md font-mono text-base">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCommentLayout;

//  pt-4 pr-0 pb-10 pl-4

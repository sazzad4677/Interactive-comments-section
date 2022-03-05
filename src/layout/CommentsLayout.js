import React from "react";
import avatar from "../images/avatars/image-amyrobson.png";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import reply from "../images/icon-reply.svg";
const CommentsLayout = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center font-mono antialiased md:w-128">
      <div className="container mx-auto">
        <div className="">
          <div className="mx-auto flex w-full flex-row flex-nowrap items-start justify-between gap-5 rounded-lg bg-white p-5">
            <div className="max-w-10 flex h-24 max-h-24 w-11 flex-col items-stretch justify-around rounded-lg bg-neutral-very-light-gray py-2">
              <button className="flex items-center justify-center  rounded bg-neutral-very-light-gray font-medium text-neutral-grayish-blue  hover:bg-transparent ">
                <img src={plus} alt="plus" className=" font-medium" />
              </button>
              <p className="py-3 text-center font-medium text-primary-moderate-blue">
                1
              </p>
              <button className="flex items-center justify-center  rounded bg-neutral-very-light-gray font-medium text-neutral-grayish-blue  hover:bg-transparent ">
                <img src={minus} alt="plus" className=" font-medium" />
              </button>
            </div>
            <div className="flex w-full flex-col gap-4 text-base font-medium text-neutral-dark-blue">
              <div className="flex justify-between gap-4">
                <div className="flex items-center gap-4 ">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    alt="Noob master's avatar"
                    src={avatar}
                  />
                  amyrobson
                  <span className="text-base font-normal text-neutral-grayish-blue">
                    2 weeks ago
                  </span>
                </div>
                <div className="flex cursor-pointer items-center gap-2 text-primary-moderate-blue">
                  <img src={reply} alt="reply" />
                  Reply
                </div>
              </div>
              <div className="w-full text-base font-normal leading-6 text-neutral-grayish-blue">
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really well.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsLayout;

import React, { useEffect, useState } from "react";
import Comments from "../components/Comments/Comments";
import NewComment from "../components/Comments/NewComment";
import Replies from "../components/Comments/Replies";
import fakeData from "../data/data.json";

const MainPage = () => {
  const [data, setData] = useState(fakeData);

  return (
    <section className="relative flex  flex-wrap place-content-center gap-6 font-mono antialiased md:w-128">
      <Comments data={data} setData={setData}/>
      <Replies data={data} setData={setData} />
      <NewComment data={data} setData={setData} />
    </section>
  );
};

export default MainPage;

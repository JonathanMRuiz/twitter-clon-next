import { SparklesIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useSession } from "next-auth/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  const styles = {
    feed: "text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]",
  };

  return (
    <div className={styles.feed}>
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-x font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ">
          <SparklesIcon className="text-white h-5" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

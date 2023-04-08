import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.css";
const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="homePage">
      {postList?.map((post, i) => {
        return (
          <div className="postContents" key={i}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.userName}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

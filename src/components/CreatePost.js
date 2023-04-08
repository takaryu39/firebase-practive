import { addDoc, collection } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase";
import "./CreatePost.css";
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        userName: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
      </div>
      <button className="postButton" onClick={createPost}>
        投稿する
      </button>
    </div>
  );
};

export default CreatePost;

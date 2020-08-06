import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post1 from "../img/post1.png";
import Post2 from "../img/post2.png";
import Post3 from "../img/post3.png";
import PostModal from "./postModal";

interface ButtonPropsType {
  primary?: number;
  photoURL?: string;
  clicked?: boolean;
}

const PostImg = styled.div<ButtonPropsType>`
  display: block;
  width: 17em;
  height: 17em;
  background-image: url(${(props) =>
    props.photoURL ? props.photoURL : props.photoURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin: 0.5em 1em 0.5em 1em;
`;

const ThreePosts = styled.div<ButtonPropsType>`
  display: flex;
`;

const SetModal = styled.div<ButtonPropsType>``;

const Post: React.FC<ButtonPropsType> = (props) => {
  const initPostNum = 0;
  const myPost = [Post1, Post2, Post3, Post1, Post2];
  const [curPostNum, setCurPostNum] = useState(initPostNum);
  const [postClicked, setPostClicked] = useState(false);

  useEffect(() => {
    myPost.forEach((e, i) => {
      document.getElementById("id" + i)?.addEventListener("click", () => {
        setPostClicked(true);
        console.log(i, e);
      });
    });
  });
  const onSearchSubmit = (flag: boolean) => {
    console.log(flag);
    setPostClicked(false);
  };

  return (
    <div>
      {postClicked ? (
        <PostModal primary={postClicked} onSubmit={onSearchSubmit}></PostModal>
      ) : (
        <></>
      )}
      {myPost.map((e, i) => {
        if (i % 3 == 0) {
          return (
            <ThreePosts key={i}>
              <PostImg photoURL={myPost[i]} id={"id" + i}></PostImg>
              <PostImg photoURL={myPost[i + 1]} id={"id" + (i + 1)}></PostImg>
              <PostImg photoURL={myPost[i + 2]} id={"id" + (i + 2)}></PostImg>
            </ThreePosts>
          );
        }
        i += 2;
      })}
    </div>
  );
};

export default Post;

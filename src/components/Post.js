import React, { useEffect, useState } from "react";
import "../styles/Post.css";
const Post = ({ post }) => {
  const [authorName, setAuthorName] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const data = await res.json();
        setAuthorName(data.name);
      } catch (err) {}
    };
    fetchAuthor();

    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, []);

  const handleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <article className="post">
      <h1 className="post__author">{authorName}</h1>
      <h1 className="post__title">{post.title}</h1>
      <p className="post__body">{post.body}</p>
      <div className="post__comments">
        {showComments ? (
          comments.slice(0, 3).map((comment) => (
            <div className="comment">
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <button onClick={handleComments}> Comments</button>
        )}
      </div>
    </article>
  );
};

export default Post;

import React, { useEffect, useState, lazy, Suspense } from "react";
const Post = lazy(() => import("../components/Post"));
import "../styles/Home.css";
const Home = () => {
  const fakeApi = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(fakeApi);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        alert(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <section className="home">
      <h1 className="home__title">Feed</h1>
      <Suspense fallback="Loading...">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Suspense>
    </section>
  );
};

export default Home;

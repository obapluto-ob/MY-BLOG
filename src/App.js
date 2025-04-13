import React, { useState } from "react";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import NewPost from "./components/NewPost";

const App = () => {
  const [posts, setPosts] = useState([]); // Store posts

  const addPost = (newPost) => {
    setPosts([...posts, newPost]); // Add new posts dynamically
  };

  return (
    <div>
      <h1>My Blog</h1>
      <SearchBar />
      <NewPost addPost={addPost} />
      <BlogList posts={posts} />
    </div>
  );
};

export default App;
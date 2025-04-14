import React, { useState } from "react";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import NewPost from "./components/NewPost";

const App = () => {
  const [posts, setPosts] = useState([]); // Store posts
  const [searchTerm, setSearchTerm] = useState(""); // Store search term

  const addPost = (newPost) => {
    setPosts([...posts, newPost]); // Add new posts dynamically
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Blog</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <NewPost addPost={addPost} />
      <BlogList posts={filteredPosts} />
    </div>
  );
};

export default App;
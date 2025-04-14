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
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>OBED EMONI LOPEYOK'S BLOG</h1>
      </header>
      <section className="hero">
        <p>Welcome to my blog! Here, I share insights, tutorials, and personal experiences on technology, programming, and more. Stay tuned for exciting content!</p>
      </section>
      <main>
        <SearchBar setSearchTerm={setSearchTerm} />
        <NewPost addPost={addPost} />
        <BlogList posts={filteredPosts} />
      </main>
      <footer>
        <p>Connect with me:</p>
        <a href="https://github.com/obapluto" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        <a href="https://twitter.com/ObedEmoni" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        {" | "}
        <a href="https://linkedin.com/in/obedemoni" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default App;
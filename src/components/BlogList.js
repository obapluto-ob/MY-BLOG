import React from "react";

const BlogList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <div key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default BlogList;
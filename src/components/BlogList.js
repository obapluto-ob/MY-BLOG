import React from "react";

const BlogList = ({ posts, deletePost }) => (
  <div>
    {posts.map((post) => (
      <div key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default BlogList;
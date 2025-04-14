import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My Journey in Tech',
      content: `This is a sample blog post about my journey in tech.`,
      comments: [],
      newComment: ''
    },
    {
      id: 2,
      title: 'React Tips and Tricks',
      content: `Some useful React tips and tricks are shared in this post.`,
      comments: [],
      newComment: ''
    }
  ]);

  // Update comment input
  const handleCommentChange = (e, postId) => {
    const { value } = e.target;
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, newComment: value } : post
      )
    );
  };

  // Handle form submission to add a comment
  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId && post.newComment.trim()) {
          return {
            ...post,
            comments: [...post.comments, post.newComment],
            newComment: ''
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="blog-page">
      {posts.map(post => (
        <div key={post.id} className="post" data-aos="fade-up">
          <h2>{post.title}</h2>
          <ReactMarkdown>{post.content}</ReactMarkdown>

          <div className="comments-section">
            <h3>Comments</h3>
            {post.comments.length > 0 ? (
              <ul>
                {post.comments.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={post.newComment}
              onChange={(e) => handleCommentChange(e, post.id)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Blog;
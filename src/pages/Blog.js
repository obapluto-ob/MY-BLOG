import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  // Initial posts state with blog posts including rich markdown for React tips & tutorials
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My Journey in Tech',
      content: `I began my programming journey at Moringa School, where I enrolled in their Software Engineering program. From the very beginning, I was fascinated by how code could bring ideas to life. The curriculum was intense but incredibly rewarding. We were trained as full-stack developers, which meant I learned both front-end and back-end development.

On the front-end, I worked with HTML, CSS, and JavaScript, gradually moving into frameworks like React. I enjoyed creating user interfaces that are not only functional but also visually appealing.

The back-end side introduced me to Python, Node.js, Express, and databases like MongoDB and PostgreSQL. This part challenged me the most, but it also helped me understand how data flows and is managed behind the scenes.

Beyond the technical skills, Moringa emphasized collaboration, agile workflows, and version control with Git and GitHub — all crucial skills in the real world of software development.

Today, I’m confident building full-stack applications from scratch, and I’m passionate about solving real-world problems through code. I know this is just the beginning, and I’m excited to keep learning, growing, and contributing to the tech community.`,
      category: 'Personal',
      tags: ['tech', 'journey', 'Moringa School', 'full-stack'],
      comments: [],
    },
    {
      id: 2,
      title: 'React Tips and Tricks',
      content: `React is a powerful library for building UIs. Here are some tips to improve your React skills:

1. **Use Functional Components:** They're simpler and easier to test than class components, and they work seamlessly with React Hooks.
2. **Leverage React Hooks:** Hooks like \`useState\`, \`useEffect\`, and \`useContext\` make managing state and side effects much easier.
3. **Memoize Components:** Use \`React.memo\` to prevent unnecessary re-renders.
4. **Validate with PropTypes or TypeScript:** Validate your props to catch bugs early.
5. **Optimize Performance:** Use tools like React DevTools to identify performance bottlenecks and optimize your app.
`,
      category: 'Tutorial',
      tags: ['react', 'tips', 'performance', 'hooks'],
      comments: [],
    },
    {
      id: 3,
      title: 'Understanding React State Management',
      content: `State management is crucial for any React application. Here are some tips to manage state effectively:

1. **Local State:** Use \`useState\` for managing state within a component.
2. **Global State:** Use \`useContext\` or libraries like Redux or Zustand for managing global state.
3. **Avoid Overusing State:** Only store data in state if it changes over time or affects the UI.
4. **Derived State:** Calculate derived state dynamically rather than storing it.
5. **Debugging:** Use Redux DevTools or React DevTools to track state changes.
`,
      category: 'Tutorial',
      tags: ['react', 'state management', 'redux', 'hooks'],
      comments: [],
    },
    {
      id: 4,
      title: 'React Component Lifecycle',
      content: `Understanding the React component lifecycle is essential. Here’s an overview:

1. **Mounting:** When a component is created and inserted into the DOM. Use \`useEffect\` with an empty dependency array to mimic \`componentDidMount\`.
2. **Updating:** When a component's state or props change. Use \`useEffect\` with dependencies to handle updates.
3. **Unmounting:** When a component is removed from the DOM. Use the cleanup function in \`useEffect\` to mimic \`componentWillUnmount\`.
4. **Error Handling:** Use error boundaries to catch errors within the component tree.
`,
      category: 'Tutorial',
      tags: ['react', 'lifecycle', 'hooks', 'error boundaries'],
      comments: [],
    },
  ]);

  // Function to add a new comment to a post
  const addComment = (postId, comment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div>
      <header>
        <h1>Blog</h1>
      </header>
      <main>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <p>
              <strong>Category:</strong> {post.category}
            </p>
            <p>
              <strong>Tags:</strong> {post.tags.join(', ')}
            </p>
            <h3>Comments</h3>
            {post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
            <CommentForm postId={post.id} addComment={addComment} />
          </div>
        ))}
      </main>
    </div>
  );
};

// Component for adding a new comment to a post
const CommentForm = ({ postId, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addComment(postId, comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Blog;
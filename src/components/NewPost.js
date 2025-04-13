import React, { useState } from "react";

const NewPost = ({ addPost }) => {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ id: Date.now(), ...formData }); // Assign a unique ID
    setFormData({ title: "", content: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPost;
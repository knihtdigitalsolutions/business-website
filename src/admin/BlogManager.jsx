import React, { useState } from 'react';

export default function BlogManager() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '', adsense: false });

  const handleChange = (field, value) => setNewPost({ ...newPost, [field]: value });
  const addPost = () => {
    setPosts([...posts, { ...newPost, date: new Date().toISOString() }]);
    setNewPost({ title: '', content: '', tags: '', adsense: false });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Blog Manager</h2>
      <div className="border p-4 rounded mb-4 flex flex-col gap-2">
        <input type="text" value={newPost.title} onChange={e => handleChange('title', e.target.value)} placeholder="Title" className="p-2 rounded" />
        <textarea value={newPost.content} onChange={e => handleChange('content', e.target.value)} placeholder="Content" className="p-2 rounded h-32" />
        <input type="text" value={newPost.tags} onChange={e => handleChange('tags', e.target.value)} placeholder="Tags (comma separated)" className="p-2 rounded" />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={newPost.adsense} onChange={e => handleChange('adsense', e.target.checked)} />
          Google Adsense Ready
        </label>
        <button onClick={addPost} className="bg-sky-500 text-white px-4 py-2 rounded">Create Post</button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Posts</h3>
      {posts.map((post, idx) => (
        <div key={idx} className="border p-4 rounded mb-2">
          <h4 className="font-bold text-sky-500">{post.title}</h4>
          <p className="text-sm mb-2">{post.content}</p>
          <div className="text-xs text-gray-500 mb-1">Tags: {post.tags}</div>
          <div className="text-xs text-gray-500 mb-1">Date: {new Date(post.date).toLocaleString()}</div>
          {post.adsense && <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-xs">Google Adsense Ready</div>}
        </div>
      ))}
    </div>
  );
}

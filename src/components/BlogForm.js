import { useState } from "react";

const BlogForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const blog = {name, title, body}

    const response =  await fetch('https://mern-api-sfto.onrender.com/api/blogs', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }

    if(response.ok){
        setError(null)
        setName('')
        setTitle('')
        setBody('')
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Blog</h3>

      <label htmlFor="name">Your Name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)} id="name" value={name} />

      <label htmlFor="title">Blog Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} id="title" value={title} />

      <label htmlFor="body">Blog Body:</label>
      <textarea name="body" id="body" onChange={(e) => setBody(e.target.value)} value={body} cols="20" rows="5"></textarea>
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;

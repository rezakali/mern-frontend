import { useState } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";

const BlogForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [secloading, setSecloading] = useState(false);
  const { dispatch } = useBlogsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSecloading(true);

    const blog = { name, title, body };

    const response = await fetch("https://mern-api-sfto.onrender.com/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      setSecloading(false);
    }

    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setName("");
      setTitle("");
      setBody("");
      dispatch({ type: "CREATE_BLOG", payload: json.blog });
      setSecloading(false);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className={secloading ? "sec-loading active" : "sec-loading"}>
        <div className="blob1"></div>
      </div>

      <h3>Add New Blog</h3>

      <label htmlFor="name">Your Name:</label>
      <input className={emptyFields.includes("Name") ? "error" : ""} type="text" onChange={(e) => setName(e.target.value)} id="name" value={name} />

      <label htmlFor="title">Blog Title:</label>
      <input className={emptyFields.includes("Title") ? "error" : ""} type="text" onChange={(e) => setTitle(e.target.value)} id="title" value={title} />

      <label htmlFor="body">Blog Body:</label>
      <textarea
        className={emptyFields.includes("Body") ? "error" : ""}
        name="body"
        id="body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        cols="20"
        rows="5"
      ></textarea>
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;

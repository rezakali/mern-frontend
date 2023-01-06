import { useState } from "react";

import { useBlogsContext } from "../hooks/useBlogsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({ blog }) => {
  const [secloading, setSecloading] = useState(false);

  const { dispatch } = useBlogsContext();

  const handleClick = async () => {
    setSecloading(true);
    const response = await fetch(`https://mern-api-sfto.onrender.com/api/blogs/${blog._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <div className={secloading ? "sec-loading active" : "sec-loading"}>
        <div className="blob1"></div>
      </div>
      <h4>{blog.title}</h4>
      <p>
        <strong>Name: </strong>
        {blog.name}
      </p>
      <p>{blog.body}</p>
      <div className="created_updated">
        <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
      </div>
      <span className="material-symbols-outlined delete" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default BlogDetails;

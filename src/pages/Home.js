import { useEffect, useState } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import Loading from "../components/Loading";

// Improting compontents
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const base_url = "https://mern-api-sfto.onrender.com/api";

  const { blogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${base_url}/blogs`);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {/* {blogs && blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
        {!blogs && <Loading />} */}

        {loading ? (
          <Loading />
        ) : (
            blogs && blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)
        )}
      </div>
      <BlogForm />
    </div>
  );
};

export default Home;

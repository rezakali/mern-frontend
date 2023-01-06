import { useEffect, useState } from "react";

// Improting compontents
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";

const Home = () => {
    const base_url = "https://mern-api-sfto.onrender.com/api"
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(`${base_url}/blogs`);
            const json = await response.json();
            console.log(json)
            
            if(response.ok){
                setBlogs(json)
            }
        }

        fetchBlogs()
    }, [])



    return ( 
        <div className="home">
            <div className="workouts">
                {blogs && blogs.map((blog) => (
                    <BlogDetails key={blog._id} blog={blog} />
                ))}
                {!blogs && <p>Loading...</p>}
            </div>
            <BlogForm />
        </div>
     );
}
 
export default Home;
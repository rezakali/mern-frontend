const BlogDetails = ({blog}) => {
    return ( 
        <div className="workout-details">
            <h4>{blog.title}</h4>
            <p><strong>Name: </strong>{blog.name}</p>
            <p>{blog.body}</p>
            <div className="created_updated">
                <p>{blog.createdAt}</p>
                <p>{blog.updatedAt}</p>
            </div>
            <span >delete</span>
        </div>
     );
}
 
export default BlogDetails;
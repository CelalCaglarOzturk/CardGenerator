import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  author: string;
}

interface BlogListProps {
  blogs: Blog[];
  title: string;
  handleDelete: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({blogs, title, handleDelete}: BlogListProps) => {
  return ( 
    <div className="blog-list">
      {blogs.map((blog: Blog)=>(  
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} >
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div> 
      ))}
    </div>
  )
}

export default BlogList;